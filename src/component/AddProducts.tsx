import React from "react";
import { Button, Form, Input, Upload } from "antd";
import { addProductAction } from "../redux/action/addProductAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type FieldType = {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};
const AddProduct: React.FC = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const onFinish = async (values: FieldType) => {
    dispatch(addProductAction(values));
    navigate("/view-products");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      style={{ width: "50%" }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input your price!" }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please input your price!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item<FieldType>
        label="Image url"
        name="image"
        rules={[{ required: true, message: "Please input your image url!" }]}
      >
        <Input type="url" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
