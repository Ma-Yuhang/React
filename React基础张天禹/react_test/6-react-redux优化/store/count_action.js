/* 
  此文件用来为Count组件生成action对象
*/
// 引入常量
import { INCREMENT, DECREMENT } from "./constant"

// 同步action 返回一个一般对象
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

// 异步action 返回一个函数
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time);
  }
}