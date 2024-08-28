/* eslint-disable @typescript-eslint/ban-ts-comment */
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
  coverImage?: File;
}
const initialState = {
  name: "",
  duration: 0,
  price: 0,
  description: "",
};
/**
 * Renders a modal component for creating a new service.
 *
 * @returns {JSX.Element} The rendered CreateServiceModal component.
 */
const ServiceMutationModal: React.FC = () => {
  // State variables
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [coverImage, setCoverImage] = useState<unknown>();

  // Hooks
  const { register, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: initialState,
  });
  const dispatch = useAppDispatch();
  const { isUpdateMode, updateService: updateServiceData } = useAppSelector(
    (state) => state.updateService
  );

  // Fetch mutation functions
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

  /**
   * Shows the modal.
   */
  const showModal = (): void => {
    setIsModalOpen(true);
    reset(initialState);
  };

  /**
   * Handles the OK button click event.
   */
  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  /**
   * Handles the Cancel button click event.
   */
  const handleCancel = (): void => {
    setIsModalOpen(false);
    dispatch(enableUpdateMode({ updateMode: false, data: null }));
    reset();
  };

  /**
   * Populates the form with existing data when editing.
   */
  useEffect(() => {
    if (isUpdateMode) {
      setIsModalOpen(true);
      // @ts-ignore
      reset(updateServiceData);
    }
  }, [updateServiceData, reset, isUpdateMode]);

  /**
   * Handles the file change event.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The event object.
   */
  const onFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.length) {
      setCoverImage(e.target.files[0]);
    }
  };

  /**
   * Handles the form submission.
   *
   * @param {Inputs} data - The form data.
   */
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      let coverImageUrl;

      if (coverImage) {
        const formData = new FormData();
        // @ts-ignore
        formData.append("image", coverImage);
        const imageUploadResponse = await uploadImage(formData).unwrap();
        coverImageUrl = imageUploadResponse?.data?.url;
      }
      const serviceData = {
        name: data.name,
        duration: Number(data.duration),
        price: Number(data.price),
        description: data.description,
        coverImage: coverImageUrl || updateServiceData?.coverImage,
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

  /**
   * Handles the success or error messages.
   */
  useEffect(() => {
    if (isSuccess) {
      toast.success("Service created successfully");
    } else if (isUpdateSuccess) {
      toast.success("Service updated successfully");
    }
    handleCancel();
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, isUpdateSuccess, reset, serverError]);

  /**
   * Handles the  error messages.
   */
  useEffect(() => {
    if (isError) {
      toast.error((serverError as any)?.data?.message);
    } else if (isUploadError) {
      toast(
        `Failed to upload image-${(uploadError as any).data.error.message}`
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
      <BtnAdd title="Add Service" onClick={showModal} />
      <Modal
        title={isUpdateMode ? "Edit Service" : "Add Service"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-t border-slate-300 w-full pt-4  space-y-4"
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
              <label className="modal-label">Description</label>
              <textarea
                className="modal-input"
                rows={4}
                {...register("description")}
              />
            </aside>
            <aside className="col-span-4">
              <>
                <label className="modal-label">Cover Image</label>
                <label htmlFor="file" className="labelFile modal-input">
                  <>
                    <IoCloudUploadOutline size={52} />
                    {coverImage ? (
                      // @ts-ignore
                      <p className="ml-2">{coverImage?.name}</p>
                    ) : (
                      <p className="text-sm"> Click to Upload Image</p>
                    )}
                  </>
                </label>
                <input
                  className="input"
                  id="file"
                  type="file"
                  name="coverImage"
                  onChange={(e) => onFileChange(e)}
                />
              </>
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

ServiceMutationModal.displayName = "CreateServiceModal";

ServiceMutationModal.displayName = "CreateServiceModal";

/**
 * Renders a modal component for creating a new service.
 *
 * @returns {JSX.Element} The rendered CreateServiceModal component.
 */

export default ServiceMutationModal;
