import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const Applayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigat=useNavigate();
  return (
    <Layout style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
<img src="data:image/png;base64,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" alt="" />
</div>
        <Menu
        onClick={(data)=>{
          console.log(data.key)
          navigat(data.key)}}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              label:"Home",
              key:"/"
            },
            {
              label:"Profile",
              key:"profile"
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Applayout ;