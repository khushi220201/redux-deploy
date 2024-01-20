// src/components/ListProduct.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Spin, Alert, Space } from "antd";
import { deleteProductAction } from "../redux/action/deleteProductAction";
import { getProductListAction } from "../redux/action/getProductAction";
const ListProduct: React.FC = () => {
  const { products, loading, error } = useSelector(
    (state: any) => state.products
  );

  const dispatch: any = useDispatch();

  // useEffect(() => {
  //   dispatch(getProductListAction());
  // }, []);
  const handleDelete = (productId: string) => {
    // Dispatch delete action by ID
    dispatch(deleteProductAction(productId));
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 200,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 300,
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (_: any, record: any) => (
        <Space size="middle">
          <a onClick={() => handleDelete(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  if (loading) {
    return <Spin tip="Loading..." />;
  }

  if (error) {
    return <Alert message={`Error: ${error}`} type="error" />;
  }
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <h2>Product List</h2>
      {products && (
        <div>
          <Table
            dataSource={products}
            columns={columns}
            rowKey="id"
            loading={loading}
            scroll={{ y: 450 }}
          />
        </div>
      )}
    </div>
  );
};

export default ListProduct;
