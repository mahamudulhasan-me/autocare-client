import { Breadcrumb } from "antd";
import { IoHomeOutline } from "react-icons/io5";
import UsersTable from "./UsersTable";

const AdminUserManagement = () => {
  return (
    <div className="bg-slate-100 p-4 rounded-md">
      <Breadcrumb
        items={[
          {
            href: "/",
            title: <IoHomeOutline />,
          },
          {
            href: "",
            title: "Dashboard",
          },
          {
            title: "Users",
          },
          {
            title: "User Management",
          },
        ]}
      />
      <div className="w-full h-full title-shadow bg-white  py-2 px-4 rounded-md mb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">User Management</h1>
      </div>
      <UsersTable />
    </div>
  );
};

export default AdminUserManagement;
