/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TableColumnsType, TableProps } from "antd";
import { Popconfirm, Table, Tooltip } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { toast } from "sonner";
import { useDeleteServiceMutation } from "../../../../redux/features/service/serviceApi";
import { useGetAllSlotsQuery } from "../../../../redux/features/slot/slotApi";
import { enableUpdateMode } from "../../../../redux/features/update/updateServiceSlice";
import { useAppDispatch } from "../../../../redux/hooks";
import { IService, ISlot } from "../../../../types";

const onChange: TableProps<IService>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const SlotTable: React.FC = () => {
  const { data: slots, isLoading, isFetching } = useGetAllSlotsQuery({});
  const dispatch = useAppDispatch();
  const [deleteService, { isError, isSuccess, error }] =
    useDeleteServiceMutation();

  const columns: TableColumnsType<ISlot> = [
    {
      title: "Service",
      dataIndex: "service",
      render: (service) => service.name,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => moment(date).format("D MMM, YY"),
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 2,
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_text, record) => (
        <div className="text-lg flex gap-3">
          <Tooltip title="Edit" color="#0f172a">
            <FiEdit
              className="text-slate-900 cursor-pointer"
              onClick={() =>
                dispatch(enableUpdateMode({ updateMode: true, data: record }))
              }
            />
          </Tooltip>
          <Popconfirm
            title="Delete the service"
            description="Are you sure to delete this service?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteService(record?._id as string)}
          >
            <Tooltip title="Delete" color="#ee3131">
              <FaRegTrashAlt className="text-rose-600 cursor-pointer" />
            </Tooltip>
          </Popconfirm>
        </div>
      ),
    },
  ];

  //   const tableData = slots?.data.map((slot)=>({ser}))

  useEffect(() => {
    if (isSuccess) {
      toast.success("Service deleted successfully");
    } else if (isError) {
      toast.error((error as any)?.data?.message);
    }
  }, [error, isError, isSuccess]);
  return (
    <Table
      columns={columns}
      loading={isLoading || isFetching}
      dataSource={slots?.data}
      onChange={onChange}
      className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md"
    />
  );
};
export default SlotTable;
