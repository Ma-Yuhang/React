import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setName as setStuName } from './store/stuSlice'
import { setName as setSchoolName } from './store/schoolSlice'
export default function App() {

  // 得到state中的数据 使用useSelector
  const {name: stuName, age, sex} = useSelector(state => state.student)
  const {name: schoolName, address} = useSelector(state => state.school) 
  // 通过useDispatch得到一个派发器
  const dispatch = useDispatch()


  function change() {
    dispatch(setStuName('啦啦'))
  }

  function changeSchool() {
    dispatch(setSchoolName('二高'))
  }
  return (
    <div>
      <h2>姓名：{stuName}</h2>
      <h2>年龄{age}</h2>
      <h2>性别：{sex}</h2>
      <button onClick={change}>修改学生姓名</button>
      <h2>学校：{schoolName}</h2>
      <h2>地址：{address}</h2>
      <button onClick={changeSchool}>修改学校名</button>
    </div>
  )
}
