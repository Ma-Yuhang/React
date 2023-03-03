// 使用RTK来构架store
import { configureStore } from '@reduxjs/toolkit'
import { schoolReducer } from './schoolSlice'
import { stuReducer } from './stuSlice' 


// 创建store对象
export default configureStore({
  reducer: {
    student: stuReducer,
    school: schoolReducer
  }
})