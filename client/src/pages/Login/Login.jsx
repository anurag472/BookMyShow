import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { loginUser } from "../../api/users";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await loginUser(values);
      if (response.success) {
        localStorage.setItem("token", JSON.stringify(response.token));
        window.location.href = "/";
        message.success(response.message);
      } else {
        message.error(response.message);
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <header className="App-header">
      <main className="main-area mw-500 text-center px-3">
        <section className="left-section">
          <h1>Login to BookMyShow</h1>
        </section>
        <section className="right-section">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input
                id="email"
                type="text"
                placeholder="Enter your Email"
              ></Input>
            </Form.Item>
            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                id="password"
                type="password"
                placeholder="Enter your Password"
              ></Input>
            </Form.Item>
            <Form.Item className="d-block">
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <p>
            Don't have an account?{" "}
            <Link to={"/register"}>Create an account</Link>
          </p>
        </section>
      </main>
    </header>
  );
}
