import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
// import { createUserWithEmailAndPassword } from './firebase/firebases';
// import { auth } from './firebase/firebase';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const registerUser = (value) => {
  // createUserWithEmailAndPassword(auth, email,Password)
  console.log(value)
}
const SignupForm = () => {

  return (
    <div className="">
      <h1>faisal</h1>
    </div>
  )
}
export default SignupForm;