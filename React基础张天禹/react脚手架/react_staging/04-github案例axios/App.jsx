import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';


export default class App extends Component {

  // 初始化状态
  state = {
    users:[], // 用户信息
    isFirst: true, // 是否初次展示
    isLoading: false, // 是否处于加载中
    err: '', // 错误信息
  }

  // 更新state
  UpdateState = (state) => {
    
    this.setState(state)
  }

  render() {
    
    return (
      <div className="container">
        <Header UpdateState={this.UpdateState}></Header>
        <List {...this.state}></List>
      </div>
    );
  }
}
