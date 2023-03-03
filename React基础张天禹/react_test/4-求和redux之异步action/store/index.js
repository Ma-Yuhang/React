// 创建redux中的store
import { legacy_createStore as createStore,applyMiddleware } from "redux";

// 引入redux-thunk用于支持异步任务
import thunk from 'redux-thunk'

import countReducer from './count_reducer'

export default createStore(countReducer, applyMiddleware(thunk))