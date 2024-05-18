import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { useNavigate } from 'react-router-dom';
import { signOut, auth } from '../../pages/firebace/firebace';
const AppLayout = ({ children }) => {
  
  const navegate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const logoutUser = () => {
    signOut(auth).then(() => {
      console.log("logout")
    }).catch((error) => {
      console.log(error)
  
    });
  }
 

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={((data) => {
            navegate(data.key)
          })}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items = {[
            {
              label: "Home",
              key: "/home"
            },
            {
              label: "Profile",
              key: "/profile"
            },
            {
              label: "LogOut",
              key:"/",
              onClick:()=>logoutUser(),
            }
          ]}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '26px 48px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default AppLayout;