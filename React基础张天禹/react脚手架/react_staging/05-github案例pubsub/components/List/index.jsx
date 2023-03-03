import React, { Component } from 'react';
import PubSub from 'pubsub-js';

import './index.css';

export default class List extends Component {

  // 初始化状态
  state = {
    users:[], // 用户信息
    isFirst: true, // 是否初次展示
    isLoading: false, // 是否处于加载中
    err: '', // 错误信息
  }

  // 更新state
  updateState = (_,state) => {
    this.setState(state)
  }
  
  componentDidMount() {
    // 订阅消息 
    this.token = PubSub.subscribe('updateState',this.updateState)
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users,isFirst,isLoading,err } = this.state
    return (

      <div className="row">
        {
          isFirst ? <h2>欢迎使用</h2> :
          isLoading ? <h2>Loading......</h2> :
          err ? <h2>{err}</h2> :
          users.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                  <img
                    alt='头像'
                    src={userObj.avatar_url}
                    style={{ width: '100px' }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}
