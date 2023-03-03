import React, { Component } from 'react';
// import axios from 'axios'
import PubSub from 'pubsub-js';

export default class Header extends Component {
  // 点击搜索
  search = async () => {
    // 拿到输入的值
    const { value: keyword } = this.inputNode;

    PubSub.publish('updateState', { isFirst: false, isLoading: true });

    // fetch发请求(未优化)
    // fetch(`https://api.github.com/search/users?q=${keyword}`).then(res => {
    //   console.log('请求服务器成功')
    //   // 数据在res.json()中 仍然是一个promise实例
    //   return res.json()
    // },err => {
    //   console.log('请求服务器失败',err);
    //   // 中断promise
    //   return new Promise(() => {})
    // }).then(res => {
    //   console.log('请求数据成功',res);
    // },err => {
    //   console.log('请求数据失败',err);
    // })

    // fetch发请求(初次优化)
    // fetch(`https://api.github.com/search/users?q=${keyword}`).then(res => {
    //   console.log('请求服务器成功')
    //   // 数据在res.json()中 仍然是一个promise实例
    //   return res.json()
    // }).then(res => {
    //   console.log('请求数据成功',res);
    // }).catch(err => {
    //   console.log(err);
    // })

    // fetch发请求(await优化)
    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=${keyword}`
      );
      const data = await res.json();
      console.log(data);
      PubSub.publish('updateState', { isLoading: false, users: data.items });
    } catch (err) {
      PubSub.publish('updateState', { err: err.message });
    }
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.inputNode = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
