import React from "react";
import ReactDOM from "react-dom/client"

// 给所有的容器组件都传递store
import { Provider } from "react-redux";
import store from "./store";
import App from './App'

ReactDOM.createRoot(document.querySelector('#root')).render(
  // 此处使用Provider包裹App，目的是让App所有的后代容器组件都能接收到store
  <Provider store={store}>
    <App />
  </Provider>
)