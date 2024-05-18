import React from 'react';
import { Button, Result } from 'antd';
const AppNotFound = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra ={
        <Link to={"/"}>
        
        <Button type="primary">Back Home</Button>
        </Link>
        }
    
  />
);
export default AppNotFound;