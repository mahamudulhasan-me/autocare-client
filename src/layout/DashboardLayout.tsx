import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { ReactNode, useState } from "react";
import { MdLogout } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
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
    const menuItem = sideBarItems.find((item) => item.key === key);
    if (menuItem && menuItem.url) {
      navigate(menuItem.url);
    }
  };

  const handleLogout = (): void => {
    dispatch(logout());
    navigate("/");
  };

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
            padding: 0,
            background: colorBgContainer,
            position: "fixed",
            width: `calc(100% - ${collapsed ? 80 : 250}px)`,
            left: collapsed ? 80 : 250,
            zIndex: 2,
          }}
        >
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
