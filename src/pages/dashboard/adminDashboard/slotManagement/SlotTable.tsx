/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TableColumnsType, TableProps } from "antd";
import { Popconfirm, Table, Tag, Tooltip } from "antd";
import dayjs from "dayjs";

import React, { useEffect } from "react";
import { GrStatusCritical } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { toast } from "sonner";
import {
  useGetAllSlotsQuery,
  useUpdateSlotMutation,
} from "../../../../redux/features/slot/slotApi";
import { ISlot } from "../../../../types";

const onChange: TableProps<ISlot>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const SlotTable: React.FC = () => {
  const { data: slots, isLoading, isFetching } = useGetAllSlotsQuery({});

  const [cancelStatus, { isSuccess: isStatusSuccess, error, isError }] =
    useUpdateSlotMutation();

  const handleUpdateStatus = async (record: ISlot) => {
    await cancelStatus({
      id: record._id,
      data: {
        status: record.status !== "cancelled" ? "cancelled" : "available",
      },
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as any)?.data.message);
    }
    if (isStatusSuccess) {
      toast.success("Slot status updated successfully");
    }
  }, [isStatusSuccess]);

  const columns: TableColumnsType<ISlot> = [
    {
      title: "SL",
      render: (_text, _record, index) => index + 1,
    },
    {
      title: "Service",
      dataIndex: "service",
      render: (service) => service.name,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => dayjs(date).format("D MMM, YY"),
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      render: (startTime) => (
        <Tag>{dayjs(startTime, "HH:mm").format("hh:mm A")}</Tag>
      ),
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      render: (endTime) => (
        <Tag>{dayjs(endTime, "HH:mm").format("hh:mm A")}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "isBooked",
      render: (isBooked, record) => (
        <Tag
          color={
            isBooked ? "red" : record.status === "cancelled" ? "red" : "green"
          }
        >
          {isBooked
            ? "Booked"
            : record.status === "cancelled"
            ? "Cancelled"
            : "Available"}
        </Tag>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_text, record) => (
        <div className="text-2xl flex gap-3">
          <Popconfirm
            title={
              record?.status === "available"
                ? "Cancel the service"
                : "Make Available"
            }
            description={
              record?.status === "available"
                ? "Are you sure to cancel this service?"
                : "Are you sure to available this service?"
            }
            okText="Yes"
            cancelText="No"
            onConfirm={() => handleUpdateStatus(record)}
          >
            {!record?.isBooked && record?.status === "available" && (
              <Tooltip title="Cancel Status" color="red">
                <GrStatusCritical className="text-red-600 cursor-pointer" />
              </Tooltip>
            )}
            {!record?.isBooked && record?.status === "cancelled" && (
              <Tooltip title="Make Available" color="red">
                <IoMdCheckboxOutline className="text-green-600 cursor-pointer" />
              </Tooltip>
            )}
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      loading={isLoading || isFetching}
      dataSource={slots?.data}
      onChange={onChange}
      rowClassName={(record) =>
        record?.status === "cancelled" ? "bg-rose-100" : "hover:bg-slate-100"
      }
      className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md"
    />
  );
};
export default SlotTable;
