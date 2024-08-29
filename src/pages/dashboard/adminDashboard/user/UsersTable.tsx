/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TableColumnsType, TableProps } from "antd";
import { Popconfirm, Table, Tag, Tooltip } from "antd";
import React, { useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { toast } from "sonner";
import { useDeleteServiceMutation } from "../../../../redux/features/service/serviceApi";
import { enableUpdateMode } from "../../../../redux/features/update/updateServiceSlice";
import { useGetAllUsersQuery } from "../../../../redux/features/users/usesApi";
import { useAppDispatch } from "../../../../redux/hooks";
import { IService } from "../../../../types";

const onChange: TableProps<IService>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const UsersTable: React.FC = () => {
  const { data: users, isLoading, isFetching } = useGetAllUsersQuery({});
  const dispatch = useAppDispatch();
  const [deleteService, { isError, isSuccess, error }] =
    useDeleteServiceMutation();
  const columns: TableColumnsType<IService> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },

    {
      title: "Role",
      dataIndex: "role",
      render: (role) => <Tag color="geekblue">{role.toUpperCase()}</Tag>,
    },
    {
      title: "Address",
      dataIndex: "address",
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
      dataSource={users?.data}
      onChange={onChange}
      className="table-shadow rounded-md"
    />
  );
};
export default UsersTable;
