import { Modal, Button, Form, Input } from "antd";
import { useState } from "react";
import axios from "axios";

export default function LoginModal() {
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
      alert("Welcome to Quantori " + response.data.username);
      console.log("Success:", response.data.username);
      handleOk();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Button
        type="primary"
        // className=" hidden sm:block bg-green-600 text-white"
        onClick={showModal}
      >
        Login
      </Button>

      <Modal
        title="Login"
        open={isModalVisible}
        centered
        onCancel={handleCancel}
        footer={null}
        className="modal w-[350px] flex items-center justify-center "
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
            <Input
              placeholder="Email"
              autoComplete="username"
              style={{ width: "200px" }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              autoComplete="password"
              style={{ width: "200px" }}
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-center gap-4">
              <Button type="default" htmlType="button" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-green-600 text-white border-green-600 hover:bg-green-700 "
              >
                Login
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
