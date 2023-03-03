import React,{ useContext,useState } from 'react'
import cartImg from '../../asset/bag.png'
import './cart.css'
import cartContext from '../../store/cartContext'
import CartDetail from './CartDetail/cartDetail'
import Checkout from '../Checkout/checkout'


export default function Cart() {
  const ctx = useContext(cartContext)

  // 控制购物车详情的显示与隐藏
  const [showDetails,setShowDetails] = useState(false)
  // 控制支付页面的显示与隐藏
  const [showCheckout,setShowCheckout] = useState(false)
  // 控制购物车详情的显示与隐藏的方法
  function toggleDetailsHandler() {
    if(ctx.total === 0) return
    setShowDetails(showDetails => !showDetails)
  }

  // 点击显示支付页面
  function toCheckoutHandler() {
    if(ctx.total === 0) return 
    setShowCheckout(true)
  }
  // 点击关闭支付页面
  function closeCheckoutHandler() {
    setShowCheckout(false)
  }
  return (
    <div className='cart-footer-box' onClick={toggleDetailsHandler}>

      {/* 支付页面 */}
      {showCheckout && ctx.total !== 0 && <Checkout closeCheckoutHandler={closeCheckoutHandler}/>}

      {/* 购物车详情 */}
      {showDetails && ctx.total !== 0 && <CartDetail setShowDetails={setShowDetails}/>}

      {/* 底部 */}
      <div className='cart-footer'>
          <div className='img-box'>
            <img src={cartImg} className='img'/>
            {
              ctx.total > 0 ? <span className='icon'>{ctx.total}</span> : null
            }
          </div>
          {
            ctx.total > 0 ? <span className='totalPrice'>{ctx.totalPrice}</span> :
            <span className='text'>请选择商品</span>
          }
        <button className={ctx.total > 0 ? 'cart-btn' : 'cart-btn noMealBtn'} onClick={toCheckoutHandler}>去结算</button>
      </div>
    </div>
  )
}
