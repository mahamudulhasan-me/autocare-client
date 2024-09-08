/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TableColumnsType, TableProps } from "antd";
import { Popconfirm, Table, Tag, Tooltip } from "antd";
import React, { useEffect } from "react";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { toast } from "sonner";
import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "../../../../redux/features/users/usesApi";
import { IUser } from "../../../../types";

const onChange: TableProps<IUser>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const UsersTable: React.FC = () => {
  const { data: users, isLoading, isFetching } = useGetAllUsersQuery({});
  const [updateUser, { isSuccess, error, isError }] = useUpdateUserMutation();

  const handleSwapUserRole = async (id: string, role: IUser["role"]) => {
    await updateUser({
      id,
      data: {
        role: role === "admin" ? "user" : "admin",
      },
    });
    console.log({ id, role });
  };

  const columns: TableColumnsType<IUser> = [
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
      render: (role) =>
        role === "admin" ? (
          <Tag color="orange">ADMIN</Tag>
        ) : (
          <Tag color="blue">USER</Tag>
        ),
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_text, { _id, role }) => (
        <Popconfirm
          title={role === "admin" ? "Make User" : "Make Admin"}
          description={
            role === "admin"
              ? "Are you sure to make user"
              : "Are you sure to make admin"
          }
          okText="Yes"
          cancelText="No"
          onConfirm={() => handleSwapUserRole(_id, role)}
        >
          {role === "admin" ? (
            <Tooltip title="Make User" color="blue">
              <LiaToggleOnSolid className="text-rose-600 cursor-pointer text-3xl" />
            </Tooltip>
          ) : (
            <Tooltip title="Make Admin" color="orange">
              <LiaToggleOffSolid className="text-rose-600 cursor-pointer text-3xl" />
            </Tooltip>
          )}
        </Popconfirm>
      ),
    },
  ];

  useEffect(() => {
    if (isError) {
      toast.error((error as any)?.data.message);
    }
    if (isSuccess) {
      toast.success("User updated successfully");
    }
  }, [error, isError, isSuccess]);
  return (
    <Table
      columns={columns}
      loading={isLoading || isFetching}
      dataSource={users?.data}
      onChange={onChange}
      className="table-shadow rounded-md"
      scroll={{ x: "max-content" }}
    />
  );
};
export default UsersTable;
