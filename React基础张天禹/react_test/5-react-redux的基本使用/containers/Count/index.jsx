/* 
  此文件是CountUI组件的容器组件
*/

// 引入CountUI组件
import CountUI from '../../components/Count'

// 引入react-redux connect用于连接CountUI组件和redux
import { connect } from 'react-redux'

import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../store/count_action'
// mapStateToProps函数的返回值作为props参数传递给了UI组件--状态
function mapStateToProps(state) {
  return {count: state}
}

// mapDispatchToProps函数的返回值作为props参数传递给了UI组件--操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia:value => dispatch(createIncrementAction(value)),
    jian:value => dispatch(createDecrementAction(value)),
    jiaAsync:(value,time) => dispatch(createIncrementAsyncAction(value,time)),
  }
}

// 使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
