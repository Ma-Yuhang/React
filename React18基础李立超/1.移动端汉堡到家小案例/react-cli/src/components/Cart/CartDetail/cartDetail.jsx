import React,{ useContext,useEffect,useState } from 'react'
import BackDrop from '../../UI/Backdrop/backdrop'
import './cartDetail.css'
import Meal from '../../Meals/Meal/meal'
import cartContext from '../../../store/cartContext'
import Confirm from '../../UI/Confirm/confirm'
export default function CartDetail(props) {

  const ctx = useContext(cartContext)

  // 确认框的显示与隐藏
  const [showConfirm,setShowConfirm] = useState(false)
  // 点击清空购物车
  function clear() {
    setShowConfirm(true)
    // ctx.clearMeal()
  }

  useEffect(() => {
    return () => {
      props.setShowDetails(false)
    }
  },[])
  // 确认按钮的回调
  function okHandler() {
    props.setShowDetails(false)
    ctx.cartDispatch({type: 'CLEARMEAL'})

  }
  // 取消按钮的回调
  function cancelHandler(e) {
    e.stopPropagation()
    setShowConfirm(false)
  }
  return (
    <BackDrop>
      {showConfirm && 
        <Confirm
          confirmText='确认清空购物车吗？'
          onCancel={cancelHandler}
          onOk={okHandler}
        />
      }
      <div className='cart-detail' onClick={e => e.stopPropagation()}>
        <div className='detail-header'>
          <span className='detail-title'>餐品详情</span>
          <span className='clear' onClick={clear}>清空购物车</span>
        </div>
        <div className='detail-mealsList'>
          {
            ctx.goods.map(item => {
              return <Meal noDesc key={item.id} mealData={item}/>
            })
          }
        </div>
      </div>
    </BackDrop>
  )
}
