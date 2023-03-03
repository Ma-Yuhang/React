import React, { Component } from 'react'
// 直接引入connect修饰过的容器组件
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {

  render() {
    return (
      <div>
        <Count/>
        <hr/>
        <Person/>
      </div>
    )
  }
}
