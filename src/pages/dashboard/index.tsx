import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import {
  ADMIN_MENU_ITEMS,
  USER_MENU_ITEMS,
} from "../../const/DashboardMenuItems";
import { useAppSelector } from "../../redux/hooks";

const { Header, Sider, Content } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const role = user?.role;
  let sideBarItems;

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
        />
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
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
