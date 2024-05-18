import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const LoginForm = ({userregister}) => (
  <Form
    name="basic"
    initialValues={{
      remember: true
    }}
    onFinish={userregister}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
  
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default LoginForm;