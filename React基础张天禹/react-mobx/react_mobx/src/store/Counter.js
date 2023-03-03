// mobx状态管理
// import {makeObservable, observable, action, computed} from 'mobx'
import {makeAutoObservable,reaction, runInAction} from 'mobx'
class Counter {
  constructor() {
    // 参数一：把谁变成响应式的
    // 参数二：指定哪些属性和方法变成可观察
    // makeObservable(this,{
    //   count: observable,
    //   increment: action,
    //   reset: action,
    //   double: computed,
    // })

    // 加强版的makeObservable
    makeAutoObservable(this,{},{autoBind:true})
  }
  count = 0

  increment() {
    setTimeout(() => {
      runInAction(() => {
        this.count++
      })
    }, 1000);
  }

  // incrementAsync() {
  //   setTimeout(this.increment, 1000);
  // }
  reset() {
    this.count = 0
  }
  get double() {
    return this.count * 2
  }

}
const counter = new Counter()

// 自动监听里边的数据 一上来执行一次 后续只要里边的数据改变就会执行
// autorun(() => {
//     console.log('Counter',counter.count);
// })

// 一上来不会执行
reaction(
  () => counter.count,
  (value,oldValue) => {
    console.log('Counter',value,oldValue);
  }
)
export default counter