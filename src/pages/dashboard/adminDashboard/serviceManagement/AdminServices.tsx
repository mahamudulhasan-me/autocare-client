import { Breadcrumb } from "antd";
import { IoHomeOutline } from "react-icons/io5";

import ServiceMutationModal from "./ServiceMutationModal";
import ServiceTable from "./ServiceTable";

const AdminServices = () => {
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
            title: "Services",
          },
        ]}
      />
      <div className="w-full h-full bg-white title-shadow py-2 px-4 rounded-md mb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Service Management</h1>
        <ServiceMutationModal />
      </div>
      <ServiceTable />
    </div>
  );
};

export default AdminServices;
