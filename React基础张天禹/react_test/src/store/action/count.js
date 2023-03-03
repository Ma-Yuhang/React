// 引入常量模块
import { INCREMENT,DECREMENT } from "../constant"

// 加法的action
export const increment = data => ({type: INCREMENT, data})
// 减法的action
export const decrement = data => ({type: DECREMENT, data})
// 加法的action
export const incrementAsync = (data,time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time);
  }
}