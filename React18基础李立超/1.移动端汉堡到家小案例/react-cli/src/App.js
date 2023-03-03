import React, {useReducer, useState } from 'react'
import Meals from './components/Meals/meals'
import cartContext from './store/cartContext'
import Search from './components/Search/search'
import Cart from './components/Cart/cart'

const cartReducer = (state,action) => {
  const {type,meal} = action
  const newCart = {...state}
  
  switch (type) {
    case 'ADDMEAL':
      // 如果有这件商品
      if(newCart.goods.indexOf(meal) !== -1) {
        meal.amount += 1
      }else {
        newCart.goods.push(meal)
        meal.amount = 1
      }
      // 增加总数
      newCart.total += 1
      // 增加总价
      newCart.totalPrice += meal.price
      return newCart
    case 'SUBMEAL':
      meal.amount -= 1
      // 检查商品数量是否为0
      if(meal.amount === 0) {
        // 移除商品
        newCart.goods.splice(newCart.goods.indexOf(meal),1)
      }

      // 减少总数
      newCart.total -= 1
      // 减少总价
      newCart.totalPrice -= meal.price
      return newCart
    case 'CLEARMEAL':
      newCart.goods.map(item => {
        item.amount = 0
        return item
      })
      newCart.goods = []
      newCart.total = 0
      newCart.totalPrice = 0
      return newCart
    default:
      return state
  }
}

const MEALS_DATA = [
  {
    id: '1',
    title: '汉堡包',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 12,
    img: '/img/meals/1.png'
  },
  {
    id: '2',
    title: '双层芝士汉堡',
    desc: '百分百纯牛肉与双层香软芝士，加上松软面包及美味酱料，诱惑无人能挡！',
    price: 20,
    img: '/img/meals/2.png'
  },
  {
    id: '3',
    title: '巨无霸',
    desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
    price: 24,
    img: '/img/meals/3.png'
  },
  {
    id: '4',
    title: '麦辣鸡腿汉堡',
    desc: '金黄脆辣的外皮，鲜嫩的鸡腿肉，多重滋味，一次打动您的味蕾！',
    price: 21,
    img: '/img/meals/4.png'
  },
  {
    id: '5',
    title: '板烧鸡腿堡',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 22,
    img: '/img/meals/5.png'
  },
  {
    id: '6',
    title: '麦香鸡',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 22,
    img: '/img/meals/6.png'
  },
  {
    id: '7',
    title: '芝士鸡腿堡',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 22,
    img: '/img/meals/7.png'
  }
]
export default function App() {

  // 商品的数据
  const [mealsData,setMealsData] = useState(MEALS_DATA)

  // 购物车数据
  // const [cartData,setCartData] = useState({
  //   // 商品列表
  //   goods: [],
  //   // 商品总数
  //   total: 0,
  //   // 商品总价
  //   totalPrice: 0
  // })

  const [cartData, cartDispatch] = useReducer(cartReducer, {
    // 商品列表
    goods: [],
    // 商品总数
    total: 0,
    // 商品总价
    totalPrice: 0
  })


  // 向购物车中添加商品
  // function addMeal(meal) {
  //   cartDispatch({type: 'ADDMEAL',meal})
    
  // }

  // 减少商品的数量
  // function subMeal(meal) {
  //   // 对购物车进行复制
  //   const newCart = {...cartData}

  //   meal.amount -= 1
  //   // 检查商品数量是否为0
  //   if(meal.amount === 0) {
  //     // 移除商品
  //     newCart.goods.splice(newCart.goods.indexOf(meal),1)
  //   }

  //   // 减少总数
  //   newCart.total -= 1
  //   // 减少总价
  //   newCart.totalPrice -= meal.price
  //   setCartData(newCart)
  // }

  // 清空购物车
  // function clearMeal() {
  //   const newCart = {...cartData}

  //   newCart.goods.map(item => {
  //     item.amount = 0
  //     return item
  //   })
  //   newCart.goods = []
  //   newCart.total = 0
  //   newCart.totalPrice = 0
  //   setCartData(newCart)
  // }

  // 筛选商品
  function filterMeals(value) {
   const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(value) !== -1)
   setMealsData(newMealsData)
  }
  return (
    <cartContext.Provider value={{...cartData,cartDispatch}}>
      <Search filterMeals={filterMeals}/>
      <Meals mealsData={mealsData}/>
      <Cart/>

    </cartContext.Provider>
  )
}

