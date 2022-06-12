// import "../App.css";
import "./Form.css";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

function Forms(props) {
  const [email, setEmail] = useState("");
  const [psswd, setPsswd] = useState("");
  const [token, setToken] = useState("");
  const onFinish = async (values) => {
    setEmail(values.username);
    setPsswd(values.password);

    const req = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: psswd,
      }),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    };

    const response = await fetch("https://reqres.in/api/login", req);
    const data = await response.json();
    if (data.token) setToken(data.token);
    else setToken(data.error);
  };

  console.log(token);
  return (
    <React.Fragment>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          className="form"
          rules={[
            {
              required: true,
              message: "*Please input your Username!",
            },
          ]}
        >
          <Input
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="form"
          rules={[
            {
              required: true,
              message: "*Please input your Password!",
            },
          ]}
        >
          <Input
            type="password"
            placeholder="Password"
            className="input"
            value={psswd}
            onChange={(e) => setPsswd(e.target.value)}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <Form.Item className="divi ">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="check2 ">Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot check" href="/">
            Forgot password
          </a>
        </Form.Item>
      </Form>
      <div className={token === "" ? "display" : "token"}>
        <div className="ques">
          {token === "user not found" ? `Oops!!` : "Token Generated :"}{" "}
        </div>
        <div className="ans"> {token}</div>
      </div>
    </React.Fragment>
  );
}

export default Forms;
