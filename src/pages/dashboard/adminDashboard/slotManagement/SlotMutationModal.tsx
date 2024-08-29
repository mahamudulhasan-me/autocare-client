/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, DatePicker, Modal, Select, TimePicker } from "antd";
import dayjs from "dayjs";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import BtnAdd from "../../../../components/ui/buttons/BtnAdd";
import { useGetAllServicesQuery } from "../../../../redux/features/service/serviceApi";
import { useCreateSlotMutation } from "../../../../redux/features/slot/slotApi";
import { useAppSelector } from "../../../../redux/hooks";
import { IService } from "../../../../types";

const SlotMutationModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState<dayjs.Dayjs | null>(null);
  const [startTime, setStartTime] = useState<dayjs.Dayjs | null>(null);
  const [endTime, setEndTime] = useState<dayjs.Dayjs | null>(null);
  const { data: services, isLoading: isLoadingServices } =
    useGetAllServicesQuery({});
  const [createSlot, { isLoading, isSuccess, isError, error }] =
    useCreateSlotMutation();
  const { isUpdateMode, updateService: updateServiceData } = useAppSelector(
    (state) => state.updateService
  );

  useEffect(() => {
    if (isUpdateMode && updateServiceData) {
      setIsModalOpen(true);
    }
  }, [isUpdateMode, updateServiceData]);

  const handleSubmitToCreateSlot = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!serviceId) {
        toast.error("Please select service");
        return;
      }
      if (!date) {
        toast.error("Please select date");
        return;
      }
      if (!startTime) {
        toast.error("Please select start time");
        return;
      }
      if (!endTime) {
        toast.error("Please select end time");
        return;
      }
      if (
        startTime.isAfter(endTime) ||
        endTime.isBefore(startTime) ||
        endTime.isSame(startTime)
      ) {
        toast.error("End time should be greater than start time");
        return;
      }
      await createSlot({
        service: serviceId,
        date: date.toDate(),
        startTime: startTime?.format("HH:mm") || "",
        endTime: endTime?.format("HH:mm") || "",
      });
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Slot created successfully");
    }
    setIsModalOpen(false);
    setServiceId("");
    setDate(null);
    setStartTime(null);
    setEndTime(null);
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message);
      console.log(error);
    }
  }, [error, isError]);
  return (
    <>
      <BtnAdd title="Create Slot" onClick={() => setIsModalOpen(true)} />
      <Modal
        title={isUpdateMode ? "Edit Service" : "Create Slot"}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <form
          onSubmit={handleSubmitToCreateSlot}
          className="border-t border-slate-300 w-full pt-4 space-y-5"
        >
          <div>
            <label className="modal-label">Service*</label>
            <Select
              showSearch
              placeholder="Select a Service"
              optionFilterProp="label"
              onChange={(value) => setServiceId(value)}
              value={serviceId}
              loading={isLoadingServices}
              className="w-full bg-slate-100"
              options={services?.data?.map((service: IService) => ({
                label: service.name,
                value: service._id,
              }))}
            />
          </div>
          <div>
            <label className="modal-label">Date*</label>
            <DatePicker
              className="w-full"
              onChange={(date) => setDate(date)}
              value={date ? dayjs(date) : null}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <aside>
              <label className="modal-label">Start Time*</label>
              <TimePicker
                format={"HH:mm"}
                className="w-full"
                onChange={(value) => setStartTime(value)}
                value={startTime}
              />
            </aside>
            <aside>
              <label className="modal-label">End Time*</label>
              <TimePicker
                format={"HH:mm"}
                className="w-full"
                onChange={(value) => setEndTime(value)}
                value={endTime}
              />
            </aside>
          </div>

          <div className="flex justify-end items-center gap-4">
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
export default SlotMutationModal;
