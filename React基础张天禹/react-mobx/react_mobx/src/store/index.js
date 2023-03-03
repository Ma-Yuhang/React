import cart from './Cart'
import counter from './Counter'
import { createContext, useContext } from 'react'

class RootStore {
  cart = cart
  counter = counter
}

const store = new RootStore()

// 创建一个上下文对象用于跨级组件通讯
const Context = createContext(store)

export default function useStore() {
  return useContext(Context)
}