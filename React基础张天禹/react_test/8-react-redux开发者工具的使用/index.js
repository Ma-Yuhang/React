import React from "react";
import ReactDOM from "react-dom/client"

// 给所有的容器组件都传递store
import { Provider } from "react-redux";
import store from "./store";
import App from './App'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)