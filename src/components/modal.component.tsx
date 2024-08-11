import { Modal, Button, Form, Input } from "antd";
import { useState } from "react";
import axios from "axios";

export default function LoginModal() {
  const [value, setValues] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          ...values,
          expiresInMins: 30,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setValues(values.username);
      console.log("Success:", response.data);
      handleOk();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Button
        type="primary"
        className="hidden sm:block bg-green-600 text-white"
        onClick={showModal}
      >
        Login
      </Button>

      <Modal
        title="Login"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="modal"
      >
        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" autoComplete="username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" autoComplete="password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
            <Button type="default" htmlType="button" onClick={handleCancel}>
              Close
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {value}
    </div>
  );
}
