import { Drawer } from "antd";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

const ResponsiveNav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const navItems = [
    {
      id: 1,
      title: "Home",
      protected: false,
      path: "/",
    },
    {
      id: 3,
      title: "Services",
      path: "/services",
      protected: false,
    },
    {
      id: 5,
      title: "Contact",
      path: "/contact",
      protected: false,
    },
    {
      id: 2,
      title: "About Us",
      path: "/about",
      protected: false,
    },
    {
      id: 6,
      title: "Dashboard",
      protected: !isAuthenticated,
      path: `/dashboard/${user?.role as string}`,
    },
  ];

  return (
    <>
      <MdMenu onClick={showDrawer} className="text-3xl text-primary" />

      <Drawer placement="left" title="Auto Care" onClose={onClose} open={open}>
        <div className="md:hidden flex flex-col">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              onClick={onClose}
              className={({ isActive }) =>
                `h-full border-b text-center inline-block transition-colors py-5 text-lg ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-slate-900 hover:border-primary hover:text-primary"
                } ${item.protected ? "hidden" : "block"}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default ResponsiveNav;
