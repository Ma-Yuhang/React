import React, { Component } from 'react'

const myContext = React.createContext()
const {Provider,Consumer} = myContext
export default class A extends Component {

  state = { name: 'ma', age: 18}
  render() {
    const {name, age} = this.state
    return (
      <div>
        <h2>我是A组件</h2>
        <div>我的姓名是{name}---{age}</div>
        <Provider value={{name,age}}>
          <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    // const {name, age} = this.context
    return (
      <div>
        <h2>我是B组件</h2>
        <C/>
      </div>
    )
  }
}

// class C extends Component {

//   // 类式组件写法 需要声明接收
//   static contextType = myContext
//   render() {
//     const {name, age} = this.context
//     // console.log(this);
//     return (
//       <div>
//         <h2>我是C组件</h2>
//         <div>{name}---{age}</div>
//       </div>
//     )
//   }
// }

function C() {
  return (
    <div>
      <h2>我是C组件</h2>
      <div>我的姓名是
        <Consumer>
          {value => `${value.name}---${value.age}`}
        </Consumer>
      </div>
    </div>
  )
}
