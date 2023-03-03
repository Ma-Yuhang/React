import React from 'react'
import './index.css'
export default function Add(props) {
  return (
    <div className='box' onClick={() => props.onclick()} >
      {props.children}
    </div>
  )
}
