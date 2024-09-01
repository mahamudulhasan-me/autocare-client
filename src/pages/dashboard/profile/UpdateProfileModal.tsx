import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import BtnPrimary from "../../../components/ui/buttons/BtnPrimary";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../../redux/features/users/usesApi";
import { useAppSelector } from "../../../redux/hooks";

interface Inputs {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

const UpdateProfileModal: React.FC = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [updateUser, { isLoading, isSuccess, isError, error }] =
    useUpdateUserMutation();
  const { data: userData } = useGetUserQuery(user?._id);
  const { name, email, phone, address } = userData?.data || {};

  useEffect(() => {
    if (isAuthenticated) {
      reset({
        ...user,
        name,
        email,
        phone,
        address,
      });
    }
  }, [address, email, isAuthenticated, name, phone, reset, user]);

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    try {
      updateUser({ id: user?._id, data });
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile updated successfully");
      setIsModalOpen(false);
    } else if (isError) {
      toast.error(error as string);
    }
  }, [error, isError, isSuccess]);

  return (
    <>
      <BtnPrimary title="Update Profile" onClick={() => setIsModalOpen(true)} />
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label className="modal-label">Name*</label>
              <input
                className="modal-input"
                type="text"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label className="modal-label">Email*</label>
              <input
                className="modal-input"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label className="modal-label">Phone*</label>
              <input
                className="modal-input"
                type="text"
                {...register("phone", { required: true })}
              />
            </div>
            <div>
              <label className="modal-label">Address*</label>
              <textarea
                className="modal-input"
                rows={4}
                {...register("address", { required: true })}
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-4 mt-4">
            <Button
              htmlType="button"
              type="default"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button htmlType="submit" type="primary" loading={isLoading}>
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpdateProfileModal;
