/* 
  此文件用来为Count组件生成action对象
*/
// 引入常量
import { INCREMENT, DECREMENT } from "./constant"

export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})