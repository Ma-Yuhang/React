// 核心store
import {legacy_createStore as createStore,applyMiddleware} from 'redux'
// 异步处理
import thunk from 'redux-thunk'
// 开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入汇总reducer
import reducer from './reducers'

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))