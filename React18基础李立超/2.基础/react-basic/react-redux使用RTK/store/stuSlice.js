import { createSlice } from '@reduxjs/toolkit'

// 使用createSlice创建reducer的切片
const stuSlice = createSlice({
  name: 'stu',  // 用来自动生成action中的type
  // state的初始值
  initialState: {
    name: '马宇航',
    age: 18,
    sex: '男'
  },
  // 指定state的各种操作，直接在对象中添加方法
  reducers: {
    setName(state, action) {
      // 这个state是一个代理对象，可以直接修改
      state.name = action.payload
    },
    setAge(state, action) {
      state.age = action.payload
    }
  }
})

export const {setName, setAge} = stuSlice.actions
export const { reducer: stuReducer} = stuSlice
