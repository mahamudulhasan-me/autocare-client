import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Layout, Menu, theme } from "antd";
import Search from "antd/es/input/Search";
import React, { ReactNode, useEffect, useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Toggle from "../components/ui/searchInput/Toggle";
import { ADMIN_MENU_ITEMS, USER_MENU_ITEMS } from "../const/DashboardMenuItems";
import { logout } from "../redux/features/authentication/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const { Header, Sider, Content } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const dispatch = useAppDispatch();

  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const role = user?.role;
  let sideBarItems: {
    key: string;
    icon: ReactNode;
    label: string;
    url: string;
    children?: {
      key: string;
      label: string;
      url: string;
    }[];
  }[] = [];

  if (isAuthenticated) {
    switch (role) {
      case userRole.ADMIN:
        sideBarItems = ADMIN_MENU_ITEMS;
        break;
      case userRole.USER:
        sideBarItems = USER_MENU_ITEMS;
        break;
      default:
        break;
    }
  }

  const navigate = useNavigate();

  const handleMenuClick = ({ key }: { key: string }): void => {
    const menuItem = sideBarItems
      .flatMap((item) => (item.children ? [item, ...item.children] : item))
      .find((item) => item.key === key);

    if (menuItem && menuItem.url) {
      navigate(menuItem.url);
    }
  };

  const handleLogout = (): void => {
    dispatch(logout());
    navigate("/");
  };
  // Handle the collapse state based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCollapsed(true); // Automatically collapse in mobile view
      } else {
        setCollapsed(false);
      }
    };

    // Call the function once to check initial screen width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="h-screen"
        style={{
          overflow: "auto",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <div className="flex justify-center items-center py-4">
          <img
            src={logo}
            alt="Logo"
            className={`w-40 ${collapsed ? "hidden" : "block"}`}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sideBarItems}
          onClick={handleMenuClick}
        />
        {isAuthenticated && (
          <div className="absolute bottom-4 w-full px-4">
            <button
              onClick={handleLogout}
              className="bg-primary text-white w-full py-2 uppercase rounded-md flex items-center justify-center gap-2"
            >
              <MdLogout size={20} /> {!collapsed && "Logout"}
            </button>
          </div>
        )}
      </Sider>
      <Layout style={{ marginLeft: collapsed ? 80 : 250 }}>
        <Header
          className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          style={{
            background: colorBgContainer,
            position: "fixed",
            width: `calc(100% - ${collapsed ? 80 : 250}px)`,
            left: collapsed ? 80 : 250,
            zIndex: 2,
            display: "flex",
            padding: "0 24px 0 0",
            justifyContent: "space-between",
          }}
        >
          <div className="flex items-center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginLeft: 16,
              }}
            />
            <Search
              placeholder="input search text"
              size="large"
              // onSearch={onSearch}
              style={{ width: 250 }}
            />
          </div>
          <div className="flex items-center gap-4">
            <Toggle />
            <Badge count={5}>
              <Avatar
                size={40}
                className="bg-slate-200 border border-slate-300 cursor-pointer"
                icon={<FaRegBell size={22} className="text-slate-500" />}
              />
            </Badge>
            <Badge dot>
              <Avatar
                size={40}
                className="bg-slate-200 border border-slate-300 cursor-pointer"
                icon={
                  <BiMessageRoundedDots size={22} className="text-slate-500" />
                }
              />
            </Badge>
            <div className="flex flex-col -space-y-12 items-end">
              <span className="font-semibold font-sans">{user?.name}</span>
              <span className="text-slate-600">{user?.email}</span>
            </div>
            <Avatar
              size={48}
              src={"https://xsgames.co/randomusers/avatar.php?g=male"}
              className="cursor-pointer bg-primary"
            />
          </div>
        </Header>
        <Content
          className="p-4 bg-white"
          style={{
            marginTop: 64,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
