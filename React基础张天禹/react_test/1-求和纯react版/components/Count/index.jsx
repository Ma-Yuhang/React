import React, { Component } from 'react'

export default class Count extends Component {

  state = {count: 0}

  increment = () => {
    const {value} = this.selectNum
    const {count} = this.state
    this.setState({count: count + value * 1})
  }
  decrement = () => {
    const {value} = this.selectNum
    const {count} = this.state
    this.setState({count: count - value * 1})
  }
  incrementIfOdd = () => {
    const {value} = this.selectNum
    const {count} = this.state
    if(count % 2 !== 0) {
      this.setState({count: count + value * 1})
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNum
    const {count} = this.state
    setTimeout(() => {
      this.setState({count: count + value * 1})
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>当前求和为: {this.state.count}</h2>
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
