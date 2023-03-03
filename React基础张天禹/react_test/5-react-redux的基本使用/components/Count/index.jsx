import React, { Component } from 'react'

export default class Count extends Component {


  // 加法
  increment = () => {
    const {value} = this.selectNum
    this.props.jia(value * 1)
  }
  // 减法
  decrement = () => {
    const {value} = this.selectNum
    this.props.jian(value * 1)
  }
  // 奇数时加
  incrementIfOdd = () => {
    const {value} = this.selectNum
    if(this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }
  // 等一等再加
  incrementAsync = () => {
    const {value} = this.selectNum
    this.props.jiaAsync(value * 1, 500)
  }

  render() {
    // console.log('CountUI组件接收到的props参数是',this.props);
    return (
      <div>
        <h2>当前求和为: {this.props.count}</h2>
        <select ref={c => this.selectNum = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>求和为奇数时加</button>
        <button onClick={this.incrementAsync}>等一等再加</button>
      </div>
    )
  }
}
