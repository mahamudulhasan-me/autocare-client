/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal } from "antd";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "sonner";
import BtnAdd from "../../../../components/ui/buttons/BtnAdd";
import { useCreateServiceMutation } from "../../../../redux/features/service/serviceApi";
import { useUploadImageMutation } from "../../../../redux/imageBBApi/imageBBpi";

interface Inputs {
  name: string;
  duration: number;
  price: number;
  description?: string;
  coverImage?: File;
}
type UploadedFile = {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

const CreateServiceModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [coverImage, setCoverImage] = useState<UploadedFile>();
  console.log(coverImage);
  const [
    uploadImage,
    { isLoading: isUploading, isError: isUploadError, error: uploadError },
  ] = useUploadImageMutation();
  const [createService, { isError, isSuccess, error: serverError, isLoading }] =
    useCreateServiceMutation();

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.length) {
      const file: File = e.target.files[0];

      const uploadedFile: UploadedFile = {
        lastModified: file.lastModified,
        lastModifiedDate: new Date(file.lastModified), // manually create lastModifiedDate
        name: file.name,
        size: file.size,
        type: file.type,
        webkitRelativePath: file.webkitRelativePath,
      };

      setCoverImage(uploadedFile);
    }
  };

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (
    data: Inputs
  ): Promise<void> => {
    try {
      // Upload image
      let coverImageUrl: string | undefined;
      if (coverImage instanceof File) {
        const formData = new FormData();
        formData.append("image", coverImage);
        const imageUploadResponse = await uploadImage(formData).unwrap();
        coverImageUrl = imageUploadResponse?.data?.url;
      }

      const serviceData = {
        name: data.name,
        duration: Number(data.duration),
        price: Number(data.price),
        description: data.description,
        coverImage: coverImageUrl,
      };

      await createService(serviceData).unwrap();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error((serverError as any)?.data?.message);
    }
    if (isSuccess) {
      toast.success("Service created successfully");
      handleCancel();
      reset();
    }
  }, [isError, isSuccess, reset, serverError]);

  useEffect(() => {
    if (isUploadError) {
      toast(
        `Failed to upload image-${(uploadError as any).data.error.message}`
      );
    }
  }, [isUploadError, uploadError]);

  return (
    <>
      <BtnAdd title="Add Service" onClick={showModal} />
      <Modal
        title="Add Service"
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
              loading={isUploading || isLoading}
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

CreateServiceModal.displayName = "CreateServiceModal";

/**
 * Renders a modal component for creating a new service.
 *
 * @returns {JSX.Element} The rendered CreateServiceModal component.
 */

export default CreateServiceModal;
