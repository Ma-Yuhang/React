/* 
  将CountUI组件和容器组件合并为一个文件
*/

import React, { Component } from 'react'

// 引入react-redux connect用于连接CountUI组件和redux
import { connect } from 'react-redux'

import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../store/count_action'

class Count extends Component {
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


// 使用connect()()创建并暴露一个Count容器组件
export default connect(
  // mapStateToProps
  state => ({count: state}),

  // mapDispatchToprops两种写法
  // 1.一般写法
  // dispatch => ({
  //   jia:value => dispatch(createIncrementAction(value)),
  //   jian:value => dispatch(createDecrementAction(value)),
  //   jiaAsync:(value,time) => dispatch(createIncrementAsyncAction(value,time)),
  // })
  // 2.简写形式 react-redux内部帮你dispatch了
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction,
  }
)(Count)
