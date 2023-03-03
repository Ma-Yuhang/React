import React from 'react'
import { useContext } from 'react'
import './counter.css'
import cartContext from '../../../store/cartContext'

export default function Counter(props) {


  const {cartDispatch} = useContext(cartContext)
  
  return (
    <div className='counter'>
      {
        props.mealData.amount > 0 ? (
        <>
          <button className='sub' onClick={() => cartDispatch({type: 'SUBMEAL', meal: props.mealData})}>
            <span>-</span>
          </button>
          <span className='amount'>{props.mealData.amount}</span>
        </>
        ) : null
      }
      <button className='add' onClick={() => cartDispatch({type: 'ADDMEAL', meal: props.mealData})}>
        <span>+</span>
      </button>
    </div>
  )
}
