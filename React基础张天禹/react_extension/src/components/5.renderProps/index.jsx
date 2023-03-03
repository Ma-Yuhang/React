import React, { Component } from 'react'

export default class A extends Component {

  render() {
    return (
      <div>
        <h2>我是A组件</h2>
        <B render={(car) => <C car={car}/>}/>
          
      </div>
    )
  }
}

class B extends Component {

  state = {car: '奔驰'}
  render() {
    return (
      <div>
        <h2>我是B组件</h2>
        {/* {this.props.children} */}
        {this.props.render(this.state.car)}
      </div>
    )
  }
}

class C extends Component {
  render() {
    return (
      <div>
        <h2>我是C组件</h2>
        <h4>收到的B组件的car是:{this.props.car}</h4>
      </div>
    )
  }
}
