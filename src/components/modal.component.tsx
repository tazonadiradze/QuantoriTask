import { Modal, Button, Form, Input } from "antd";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./store/auth.context";
import { loginData } from "./types/user-types";
import Loading from "./loading";

export default function LoginModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUserData } = useAuth();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values: loginData) => {
    console.log(values);
    try {
      setIsLoading(true);
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
      // alert("Welcome to Quantori " + response.data.username);
      setUserData(response.data); // Store the response data in context
      navigate("/about");
      handleOk();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

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
        className="modal flex items-center justify-center "
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
            <Input placeholder="Email" autoComplete="username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" autoComplete="password" />
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
