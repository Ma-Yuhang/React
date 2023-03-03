import React, { Component } from 'react'
import store from './store'
import Count from './containers/Count'
export default class App extends Component {

  // 监测store中状态的改变，只要改变就重新调用render
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
  render() {
    return (
      <Count store={store}/>
    )
  }
}
