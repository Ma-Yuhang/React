import React from 'react'
import Backdrop from '../Backdrop/backdrop'
import './confirm.css'

export default function Confirm(props) {
  return (
    <Backdrop className="confirm-box" onClick={(e) => e.stopPropagation()}>
      <div className='confirm'>
        <div className='confirm-title'>{props.confirmText}</div>
        <div className='btn-box'>
          <button className='cancel' onClick={(e) => props.onCancel(e)}>取消</button>
          <button className='ok' onClick={(e) => props.onOk(e)}>确认</button>
        </div>
      </div>
    </Backdrop>
  )
}
