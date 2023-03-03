// 创建redux中的store
import { legacy_createStore as createStore,applyMiddleware } from "redux";

// 引入redux-thunk用于支持异步任务
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

// 引入合并之后的reducer
import reducer from './reducers'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))