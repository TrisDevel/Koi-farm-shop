import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
 
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import "../layouts/Admin.css"
import { BiSearchAlt } from "react-icons/bi";
const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customer",
              icon: <FaRegCircleUser className="fs-4" />,
              label: "Customer",
            },
            {
              key: "product",
              icon: <CiShoppingCart className="fs-4" />,
              label: "Product",
            },
            {
              key: "order",
              icon: <GoChecklist className="fs-4" />,
              label: "Order",
            },
            {
              key: "notification",
              icon: <IoIosNotificationsOutline className="fs-4" />,
              label: "Notification",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-3 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
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
            }}
          />
        
        <div className="d-flex gap-3 align-items-center search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        aria-invalid="false"
      />
      <BiSearchAlt className="search-icon" />
    </div>
          <div className="d-flex gap-3 align-items-center">
            <div className="position-relative">
            <IoIosNotificationsOutline className="fs-4" />
            <span className="badge bg-warning rounded-circle p-1 position-absolute "> </span>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <img
                  style={{ width: "32px", height: "32px" }}
                  src="https://www.jet-puu.fi/wordpress/wp-content/uploads/noimage-300x300-1.jpg"
                  alt="Profile"
                />
              </div>
              <div role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <h5 className="mb-0">Nvt</h5>
                <p className="mb-0">nvt@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
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
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
