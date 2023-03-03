import {makeAutoObservable } from 'mobx'

class Cart {
  constructor() {
    makeAutoObservable(this,{},{autoBind: true})
  }


  list = [1,2,3]
}

export default new Cart()