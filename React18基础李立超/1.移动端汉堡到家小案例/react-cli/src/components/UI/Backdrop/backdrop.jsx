import React from 'react'
import ReactDOM from 'react-dom'
import './backdrop.css'

// 获取遮罩层
const backdropRoot = document.querySelector('#backdrop-root')

export default function Backdrop(props) {
  return ReactDOM.createPortal(<div {...props} className={`backdrop ${props.className}`}>
    {props.children}
  </div>,backdropRoot)
}
