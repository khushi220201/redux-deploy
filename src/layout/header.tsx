// layout/Navbar.jsx
import React from "react";
import { Layout, Space } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar: React.FC = () => (
  <Header
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Space size={20}>
      <Link to="/add-product" style={{ color: "white" }}>
        Add products
      </Link>
      <Link to="/view-products" style={{ color: "white" }}>
        View products
      </Link>
      <Link to="/react-quill" style={{ color: "white" }}>
        React-Quill
      </Link>
    </Space>
  </Header>
);

export default Navbar;
