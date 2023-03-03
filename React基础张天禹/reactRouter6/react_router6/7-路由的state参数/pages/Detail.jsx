import React from 'react'
import {useLocation} from 'react-router-dom'
export default function Detail() {

  const {state: {id, title}} = useLocation()
  
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
    </ul>
  )
}
