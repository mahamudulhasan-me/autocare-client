import type { TableColumnsType, TableProps } from "antd";
import { Popconfirm, Table, Tooltip } from "antd";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useGetAllServicesQuery } from "../../../../redux/features/service/serviceApi";
import { enableUpdateMode } from "../../../../redux/features/update/updateServiceSlice";
import { useAppDispatch } from "../../../../redux/hooks";

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const ServiceTable: React.FC = () => {
  const { data: services, isLoading, isFetching } = useGetAllServicesQuery({});
  const dispatch = useAppDispatch();
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
          >
            <Tooltip title="Delete" color="#ee3131">
              <FaRegTrashAlt className="text-rose-600 cursor-pointer" />
            </Tooltip>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      loading={isLoading || isFetching}
      dataSource={services?.data}
      onChange={onChange}
    />
  );
};
export default ServiceTable;
