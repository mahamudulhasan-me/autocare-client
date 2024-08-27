import { AiOutlineDashboard } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
export const ADMIN_MENU_ITEMS = [
  {
    key: "1",
    icon: <AiOutlineDashboard />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <GrServices />,
    label: "Services",
  },
  {
    key: "3",
    icon: <FaCheckToSlot />,
    label: "Slots",
  },
  {
    key: "4",
    icon: <FaUsersCog />,
    label: "Users",
  },
];

export const USER_MENU_ITEMS = [
  {
    key: "1",
    icon: <AiOutlineDashboard />,
    label: "Dashboard",
  },

  {
    key: "3",
    icon: <FaCheckToSlot />,
    label: "Booked Slots",
  },
];
