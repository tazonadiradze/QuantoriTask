import { Modal, Button, Form, Input } from "antd";
import { useState } from "react";

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

  const onFinish = (values: any) => {
    console.log("Success:", values);
    // You can handle login logic here
    handleOk(); // Optionally close the modal after a successful login
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
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // Optional: to hide default footer
        className="modal" // Optional: to add custom styles if needed
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
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
            <Button type="primary" htmlType="button" onClick={handleCancel}>
              close
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
