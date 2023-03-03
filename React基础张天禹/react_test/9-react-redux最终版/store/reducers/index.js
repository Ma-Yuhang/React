/* 
  此文件用来汇总所有的reducer
*/
// 从redux中引入合并reducer的方法
import { combineReducers } from "redux";
// 引入Count组件的reducer
import count from './count'
// 引入Person组件的reducer
import person from "./person";


// 合并reducers
export default combineReducers({
  count,
  persons: person
})