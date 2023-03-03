/* 
  将CountUI组件和容器组件合并为一个文件../../store/actions/count_action
*/

import React, { Component } from 'react'

// 引入react-redux connect用于连接CountUI组件和redux
import { connect } from 'react-redux'

import {
  increment, 
  decrement, 
  incrementAsync
} from '../../store/actions/count'

class Count extends Component {
  // 加法
  increment = () => {
    const {value} = this.selectNum
    this.props.increment(value * 1)
  }
  // 减法
  decrement = () => {
    const {value} = this.selectNum
    this.props.decrement(value * 1)
  }
  // 奇数时加
  incrementIfOdd = () => {
    const {value} = this.selectNum
    if(this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  // 等一等再加
  incrementAsync = () => {
    const {value} = this.selectNum
    this.props.incrementAsync(value * 1, 500)
  }

  render() {
    // console.log('CountUI组件接收到的props参数是',this.props);
    const {count, personArr} = this.props
    return (
      <div>
        <h2>我是Count组件</h2>
        <h4>当前求和为: {count}</h4>
        <select ref={c => this.selectNum = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>求和为奇数时加</button>
        <button onClick={this.incrementAsync}>等一等再加</button>
        <ul>
          {
            personArr.map(personObj => {
              return <li key={personObj.id}>姓名：{personObj.name}-年龄：{personObj.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}


// 使用connect()()创建并暴露一个Count容器组件
export default connect(
  // mapStateToProps
  state => ({count: state.count, personArr: state.persons}),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count)
