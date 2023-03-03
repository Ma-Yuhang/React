// 创建redux中的store
import { legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux";

// 引入redux-thunk用于支持异步任务
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

import countReducer from './reducers/count'
import personReducer from "./reducers/person";
// 合并reducers
const allReducers = combineReducers({
  he: countReducer,
  persons: personReducer
})
export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))