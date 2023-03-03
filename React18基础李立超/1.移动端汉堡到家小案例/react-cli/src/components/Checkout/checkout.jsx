import React,{ useContext } from 'react'
import ReactDOM from 'react-dom'
import './checkout.css'
import Meal from '../Meals/Meal/meal'
import cartContext from '../../store/cartContext'
import { useEffect } from 'react'

const checkoutRoot = document.getElementById('checkout-root')


export default function Checkout(props) {

  const ctx = useContext(cartContext)

  useEffect(() => {
    return () => {
      // 当组件卸载时 修改控制checkout显示与隐藏的值为false
      props.closeCheckoutHandler()
    }
  },[])

  // 关闭支付页面
  function closeCheckout() {
    props.closeCheckoutHandler()
  }

  return ReactDOM.createPortal(
  <div className='checkout'>
    <header className='close'>
      <button onClick={closeCheckout}>关闭</button>
    </header>
    <div className='checkout-main'>
      <div className='checkout-title'>餐品详情</div>
      <div className='checkout-context'>
        {
          ctx.goods.map(item => {
            return <Meal noDesc key={item.id} mealData={item}/>
          })
        }
      </div>
      <div className='checkout-main-footer'>
        <span>合计：</span>
        <span className='checkout-price'>{ctx.totalPrice}</span>
      </div>
    </div>
    
    <footer className='checkout-footer'>
          
        <span className='checkout-text'>祝您选餐愉快</span>
          
        <button className='checkout-btn'>去支付</button>
    </footer>
  </div>
  ,checkoutRoot)
}
