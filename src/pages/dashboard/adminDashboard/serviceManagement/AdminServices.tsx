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
      <div className="w-full h-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2 px-4 rounded-md mb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Service Management</h1>
        <ServiceMutationModal />
      </div>
      <ServiceTable />
    </div>
  );
};

export default AdminServices;
