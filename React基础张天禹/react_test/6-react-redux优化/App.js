import React, { Component } from 'react'
import Count from './containers/Count'
export default class App extends Component {

  // 在react-redux中 自动监测数据变化 然后重新render
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  render() {
    return (
      <Count/>
    )
  }
}
