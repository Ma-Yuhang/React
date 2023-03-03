import React from 'react'
// import counter from './store/Counter'
// import cart from './store/Cart'
import {observer} from 'mobx-react'
import useStore from './store'
function App() {
  const {counter,cart} = useStore()
  return (
    <div>
      <h4>计数器案例</h4>
      <h3>{cart.list}</h3>
      <div>当前的值为：{counter.count}</div>
      <div>double {counter.double}</div>
      <button onClick={counter.increment}>+</button>
      {/* <button onClick={Counter.incrementAsync}>等一等再+</button> */}
      <button onClick={counter.reset}>重置</button>
    </div>
  )
}

export default observer(App)
