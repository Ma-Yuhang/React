import { createSlice } from '@reduxjs/toolkit'

const schoolSlice = createSlice({
  name: 'school',
  initialState: {
    name: '一高',
    address: '新密'
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload
    },
    setAddress(state, action) {
      state.address = action.payload
    }
  }
})

export const {setName, setAddress} = schoolSlice.actions
export const {reducer: schoolReducer} = schoolSlice