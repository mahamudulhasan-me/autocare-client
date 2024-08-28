import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { ReactNode, useState } from "react";
import { MdLogout } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { ADMIN_MENU_ITEMS, USER_MENU_ITEMS } from "../const/DashboardMenuItems";
import { logout } from "../redux/authentication/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const { Header, Sider, Content } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const DashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
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

  /**
   * Handles menu click event.
   * @param {Object} param - The object containing the key of the clicked menu item.
   * @param {string} param.key - The key of the clicked menu item.
   * @returns {void}
   */
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
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img src={logo} alt="" className="w-52  pt-3 pb-5 mx-auto" />
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={sideBarItems}
          onClick={handleMenuClick}
        />
        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="bg-primary text-white absolute bottom-4 w-[96%] py-2  uppercase mx-1 rounded-md flex items-center justify-center gap-2"
          >
            <MdLogout size={20} /> Logout
          </button>
        )}
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
