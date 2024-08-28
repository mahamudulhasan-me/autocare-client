import type { TableColumnsType, TableProps } from "antd";
import { Popconfirm, Table, Tooltip } from "antd";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useGetAllServicesQuery } from "../../../../redux/features/service/serviceApi";

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Duration",
    dataIndex: "duration",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    render: () => (
      <div className="text-lg flex gap-3">
        <Tooltip title="Edit" color="#0f172a">
          <FiEdit className="text-slate-900 cursor-pointer" />
        </Tooltip>
        <Popconfirm
          title="Delete the service"
          description="Are you sure to delete this service?"
          okText="Yes"
          cancelText="No"
        >
          <Tooltip title="Delete" color="#ee3131">
            <FaRegTrashAlt className="text-rose-600 cursor-pointer" />
          </Tooltip>
        </Popconfirm>
      </div>
    ),
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const ServiceTable: React.FC = () => {
  const { data: services } = useGetAllServicesQuery({});
  console.log(services);
  return (
    <Table columns={columns} dataSource={services?.data} onChange={onChange} />
  );
};
export default ServiceTable;
