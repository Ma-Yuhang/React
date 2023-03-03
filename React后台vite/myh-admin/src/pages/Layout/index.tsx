import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import { Outlet,useLocation } from 'react-router-dom'
import MainMenu from '@/components/MainMenu'
const { Header, Content, Footer, Sider } = Layout;
  
const LayoutComponent: React.FC = () => {
  // 控制左侧导航的显示与隐藏
  const [collapsed, setCollapsed] = useState(false);
  // 面包屑数组
  const breadcrumbArr = useLocation().pathname.split('/').slice(1).map(item => item[0].toUpperCase()+item.slice(1))

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo">{collapsed ? 'Myh' : 'Myh后台管理'}</div>
        <MainMenu/>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0,lineHeight: '64px'}} >
          {/* 面包屑 */}
          <Breadcrumb style={{ margin: '16px'}}>
            {
              breadcrumbArr.map((item,index) => {
                return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
              })
            }
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '16px 16px 0' }} className="site-layout-background">
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center',padding: 0,lineHeight: '48px' }}>Myh通用后台管理</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
