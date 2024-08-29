/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal } from "antd";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "sonner";
import BtnAdd from "../../../../components/ui/buttons/BtnAdd";
import {
  useCreateServiceMutation,
  useUpdateServiceMutation,
} from "../../../../redux/features/service/serviceApi";
import { enableUpdateMode } from "../../../../redux/features/update/updateServiceSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useUploadImageMutation } from "../../../../redux/imageBBApi/imageBBpi";

interface Inputs {
  name: string;
  duration: number;
  price: number;
  description?: string;
  coverImage?: File | string | null;
}

const initialState = {
  name: "",
  duration: 0,
  price: 0,
  description: "",
  coverImage: "",
};

const SlotMutationModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [coverImage, setCoverImage] = useState<File | string | null>(null);

  const { register, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: initialState,
  });
  const dispatch = useAppDispatch();
  const { isUpdateMode, updateService: updateServiceData } = useAppSelector(
    (state) => state.updateService
  );

  const [
    uploadImage,
    { isLoading: isUploading, isError: isUploadError, error: uploadError },
  ] = useUploadImageMutation();
  const [createService, { isError, isSuccess, error: serverError, isLoading }] =
    useCreateServiceMutation();
  const [
    updateService,
    {
      isError: isUpdateError,
      isSuccess: isUpdateSuccess,
      error: updateError,
      isLoading: isUpdateLoading,
    },
  ] = useUpdateServiceMutation();

  const showModal = (): void => {
    setIsModalOpen(true);
    reset(initialState);
  };

  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
    dispatch(enableUpdateMode({ updateMode: false, data: null }));
    setCoverImage(null); // Reset cover image on cancel
    reset();
  };

  useEffect(() => {
    if (isUpdateMode && updateServiceData) {
      setIsModalOpen(true);
      reset({ ...updateServiceData });
      setCoverImage(updateServiceData?.coverImage || null); // Set existing image
    }
  }, [updateServiceData, reset, isUpdateMode]);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.length) {
      setCoverImage(e.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      let coverImageUrl;

      if (coverImage && typeof coverImage !== "string") {
        const formData = new FormData();
        formData.append("image", coverImage);
        const imageUploadResponse = await uploadImage(formData).unwrap();
        coverImageUrl = imageUploadResponse?.data?.url;
      } else if (isUpdateMode && typeof coverImage === "string") {
        coverImageUrl = coverImage;
      } else {
        toast.error("Cover image is required");
        return;
      }

      const serviceData = {
        name: data.name,
        duration: Number(data.duration),
        price: Number(data.price),
        description: data.description,
        coverImage: coverImageUrl,
      };

      if (isUpdateMode) {
        await updateService({
          id: updateServiceData?._id,
          data: serviceData,
        });
      } else {
        await createService(serviceData);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Service created successfully");
      handleCancel(); // Close modal and reset state after success
    } else if (isUpdateSuccess) {
      toast.success("Service updated successfully");
      handleCancel();
    }
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isUpdateSuccess, reset]);

  useEffect(() => {
    if (isError) {
      toast.error((serverError as any)?.data?.message);
    } else if (isUploadError) {
      toast(
        `Failed to upload image - ${(uploadError as any).data.error.message}`
      );
    } else if (isUpdateError) {
      toast.error((updateError as any).data.error.message);
    }
  }, [
    isError,
    isUpdateError,
    isUploadError,
    serverError,
    updateError,
    uploadError,
  ]);

  return (
    <>
      <BtnAdd title="Create Slot" onClick={showModal} />
      <Modal
        title={isUpdateMode ? "Edit Service" : "Create Slot"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-t border-slate-300 w-full pt-4 space-y-4"
        >
          <div>
            <label className="modal-label">Name*</label>
            <input
              className="modal-input"
              type="text"
              {...register("name", { required: true })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <aside>
              <label className="modal-label">Duration*</label>
              <input
                className="modal-input"
                type="number"
                {...register("duration", { required: true })}
              />
            </aside>
            <aside>
              <label className="modal-label">Price*</label>
              <input
                className="modal-input"
                type="number"
                {...register("price", { required: true })}
              />
            </aside>
          </div>

          <div className="grid grid-cols-12 gap-x-4">
            <aside className="col-span-8">
              <label className="modal-label">Description*</label>
              <textarea
                className="modal-input"
                rows={4}
                {...register("description", { required: true })}
              />
            </aside>
            <aside className="col-span-4">
              <label className="modal-label">Cover Image*</label>
              <label htmlFor="file" className="labelFile modal-input">
                <>
                  <IoCloudUploadOutline size={52} />
                  {coverImage && typeof coverImage === "object" ? (
                    <p className="ml-2">{(coverImage as File).name}</p>
                  ) : coverImage && typeof coverImage === "string" ? (
                    <img src={coverImage} alt="" />
                  ) : (
                    <p className="text-sm">Click to Upload Image</p>
                  )}
                </>
              </label>
              <input
                className="input"
                id="file"
                type="file"
                name="coverImage"
                onChange={onFileChange}
              />
            </aside>
          </div>

          <div className="flex justify-end items-center gap-4">
            <Button htmlType="submit" type="default" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              htmlType="submit"
              type="primary"
              loading={isLoading || isUploading || isUpdateLoading}
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SlotMutationModal;
