import React, { Component } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './header/header';
import './index.css';
import Nav from './nav/nav'
// 引入路由
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import User from '../user/user'
import Role from '../role/role'
import Bar from '../bar/bar'
import Line from '../line/line'
import Pie from '../pie/pie'
const { Footer, Sider, Content } = Layout;
export default class Admin extends Component {
  render() {
    return (
      <div>
        <Layout className="admin">
          <Sider className="slider">
            <Nav/>
          </Sider>
          <Layout>
            <Header />
            <Content className="content">
              <Switch>
                <Route path="/admin/home" component={Home}/>
                <Route path="/admin/prod/category" component={Category}/>
                <Route path="/admin/prod/product" component={Product}/>
                <Route path="/admin/user" component={User}/>
                <Route path="/admin/role" component={Role}/>
                <Route path="/admin/charts/bar" component={Bar}/>
                <Route path="/admin/charts/line" component={Line}/>
                <Route path="/admin/charts/pie" component={Pie}/>
                <Redirect to="/admin/home"/>
              </Switch>
            </Content>
            <Footer className="footer">推荐使用谷歌浏览器</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
