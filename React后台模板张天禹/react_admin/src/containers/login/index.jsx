import React, { Component } from 'react';
import './login.css';
import { Form, Input, Icon, Button } from 'antd';
import {connect} from 'react-redux'
class Login extends Component {
  // 点击提交按钮的回调
  handleSubmit = e => {
    e.preventDefault();
    // 统一验证规则 如通过发送ajax请求
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        this.props.history.replace('/admin/home')
      }
    })
  }
  // 密码的校验规则
  pwdValidator(rule, value, callback) {
    if(!value) {
      callback('密码必须输入')
    } else if (value.length < 4) {
      callback('密码必须大于等于4位')
    } else if (value.length > 6) {
      callback('密码必须小于等于6位')
    } else if (!(/^\w+$/).test(value)) {
      callback('密码必须是字母数字下划线')
    } else {
      callback()
    }
  }

  render() {
    // console.log(this.props);
    // 校验规则的装饰器
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <header>后台管理系统</header>
        <div className="login">
          <div className="login-text">登录</div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: '用户名必须输入' }, 
                  { min: 4, message: '用户名必须大于等于4位' }, 
                  { max: 6, message: '用户名必须小于等于6位' }, 
                  { pattern: /^\w+$/, message: '用户名必须是字母数字下划线' }, 
                ]
              })
              (
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入用户名"/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {validator: this.pwdValidator}, 
                ]
              })
              (
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入密码" type='password'/>
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}


export default  connect(
  state => ({}),
  {
    
  }
)(Form.create()(Login))