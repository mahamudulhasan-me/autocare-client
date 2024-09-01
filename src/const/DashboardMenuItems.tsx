import { AiOutlineDashboard } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";

export const ADMIN_MENU_ITEMS = [
  {
    key: "1",
    icon: <AiOutlineDashboard />,
    label: "Dashboard",
    url: "/dashboard/admin",
  },
  {
    key: "2",
    icon: <GrServices />,
    label: "Services",
    url: "/dashboard/admin/services",
  },
  {
    key: "3",
    icon: <FaCheckToSlot />,
    label: "Slots",
    url: "/dashboard/admin/slots",
  },
  {
    key: "4",
    icon: <FaUsersCog />,
    label: "Users",
    url: "/dashboard/admin/users",
    children: [
      {
        key: "5",
        label: "User Bookings",
        url: "/dashboard/admin/users-bookings",
      },
      {
        key: "6",
        label: "User Management",
        url: "/dashboard/admin/users-management",
      },
    ],
  },

  {
    key: "8",
    icon: <FaUsersCog />,
    label: "Profile",
    url: "/dashboard/user/profile",
  },
];

export const USER_MENU_ITEMS = [
  {
    key: "1",
    icon: <AiOutlineDashboard />,
    label: "Dashboard",
    url: "/dashboard/user",
  },
  {
    key: "3",
    icon: <FaCheckToSlot />,
    label: "Booked Slots",
    url: "/dashboard/user/booked-slots",
  },
  {
    key: "7",
    icon: <FaUsersCog />,
    label: "Profile",
    url: "/dashboard/user/profile",
  },
];
