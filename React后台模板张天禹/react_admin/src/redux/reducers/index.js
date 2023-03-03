import { combineReducers } from 'redux'
import countReducer from './count'
import menuReducer from './menu'


export default combineReducers({
  count: countReducer,
  title: menuReducer
})