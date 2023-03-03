import { createContext } from "react";


export default createContext({
  goods: [],
  total: 0,
  totalPrice: 0,
  // addMeal: () => {},
  // subMeal: () => {},
  // clearMeal: () => {}
  cartDispatch: () => {}
})