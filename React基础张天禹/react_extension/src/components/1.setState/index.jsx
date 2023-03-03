import React, { Component } from 'react'

export default class Demo extends Component {
  state = {n: 0}

  add = () => {
    const {n} = this.state
    // 1.对象式setState 第二个参数是一个函数 为可选参数,在数据更新完之后调用
    this.setState({n: n + 1}, () => {
      console.log(this.state.n);
    })

    // 函数式的setState 第二个参数是一个函数 为可选参数,在数据更新完之后调用
    // this.setState((state,props) => {
    //   return {n: state.n + 1}
    // })
  }
  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.n}</h2>
        <button onClick={this.add}>点击+1</button>
      </div>
    )
  }
}
