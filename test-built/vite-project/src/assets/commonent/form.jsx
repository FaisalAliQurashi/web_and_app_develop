import React from 'react';
import { Form, Input, InputNumber, Typography } from 'antd';
const AppForm = () => {
  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);
  // The selector is static and does not support closures.
  const customValue = Form.useWatch((values) => `name: ${values.name || ''}`, form);
  return (
    <>
      <Form form={form} layout="vertical" autoComplete="off">
      <Form.Item name="name" label="Name">
          <Input placeholder='Name on Card' />
        </Form.Item>
         <Form.Item name="Card" label="Card Number">
          <Input placeholder='Label' />
        </Form.Item>
        <Form.Item name="season" label="MM / YY">
          <Input placeholder='MM / YY' />
        </Form.Item>
        <Form.Item name="cvc" label="CVC">
          <Input placeholder='Seacurity Code' />
        </Form.Item>
       
      </Form>
    </>
  );
};
export default AppForm;