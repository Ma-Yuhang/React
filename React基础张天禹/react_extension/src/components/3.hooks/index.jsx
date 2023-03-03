import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

// export default class Demo extends Component {

//   state = {count: 0}
//   // 组件挂载
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({count: this.state.count + 1})
//     }, 1000);
//   }

//   // ref的第三种写法
//   myRef = React.createRef()

//   add = () => {
//     this.setState(state => ({count: state.count + 1}))
//   }

//   tip = () => {
//     alert(this.myRef.current.value)
//   }
//   // deleteComponents = () => {
//   //   ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
//   // }
//   render() {
//     return (
//       <div>
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick={this.add}>点我加1</button>
//         <input type="text" ref={this.myRef}/>
//         {/* <button onClick={this.deleteComponents}>卸载组件</button> */}
//         <button onClick={this.tip}>提示用户输入</button>
//       </div>
//     )
//   }
// }

export default function Demo() {

  const [count, setCount] = React.useState(0)
  const [uname, setName] = React.useState('tom')

  // React.useEffect(() => {
  //   setInterval(() => {
  //     setCount(count => count + 1)
  //   }, 1000);
  //   return () => {
  //     console.log(1);
  //   }
  // },[])

  const myRef = React.useRef()
  function add() {
    setCount(count + 1)
    // setCount(count => count + 1)
  }
  function change() {
    setName('jack')
  }
  function tip() {
    alert(myRef.current.value)
  }
  // function unmount() {
  //   root.unmount(document.querySelector('#root'))
  // }

  return (
    <div>
      <h2>当前求和为：{count}</h2>
      <h2>名字为：{uname}</h2>
      <input type="text" ref={myRef}/>
      <button onClick={add}>点我加1</button>
      <button onClick={change}>点我改名</button>
      {/* <button onClick={unmount}>点我卸载</button> */}
      <button onClick={tip}>提示用户输入</button>
    </div>
  )
}