import React, { Component } from 'react'
import store from '../../store'

export default class Count extends Component {


  // 加法
  increment = () => {
    const {value} = this.selectNum
    store.dispatch({type: 'increment', data: value * 1})
  }
  // 减法
  decrement = () => {
    const {value} = this.selectNum
    store.dispatch({type: 'decrement', data: value * 1})
  }
  // 奇数时加
  incrementIfOdd = () => {
    const {value} = this.selectNum
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch({type: 'increment', data: value * 1})
    }
  }
  // 等一等再加
  incrementAsync = () => {
    const {value} = this.selectNum
    setTimeout(() => {
      store.dispatch({type: 'increment', data: value * 1})
    }, 1000);
  }

  render() {
    return (
      <div>
        <h2>当前求和为: {store.getState()}</h2>
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
