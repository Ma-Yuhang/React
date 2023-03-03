import { combineReducers } from "redux";


// 引入count组件的reducer
import countReducer from "./count";
// 引入person组件的reducer
import personReducer from "./person";

export default combineReducers({
  count: countReducer,
  persons: personReducer
})