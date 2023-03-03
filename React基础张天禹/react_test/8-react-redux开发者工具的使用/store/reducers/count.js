/* 
  创建为Count组件服务的reducer，reducer的本质就是一个函数
  reducer函数会接到两个参数 分别是：之前的状态(preState)、动作对象(action)
*/

// 引入常量
import { INCREMENT, DECREMENT } from "../constant"

// 初始化状态
const initState = 0
export default function countReducer(preState = initState, action) {
  const {type, data} = action

  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}