import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './index.css';

export default class Footer extends Component {

  // 对props进行类型限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateAllTodo: PropTypes.func.isRequired
  }


  // 全选按钮的回调
  handleCheckedAll = (e) => {
    this.props.updateAllTodo(e.target.checked)
  }

  // 删除所有已完成的todo
  handleDeleteAll = () => {
    this.props.deleteAllTodo()
  }
  render() {
    const {todos} = this.props
    // 统计已完成的总数
    const doneTotal = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

    // 全部总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneTotal === total && total !== 0} onChange={this.handleCheckedAll}/>
        </label>
        <span>
          <span>已完成{doneTotal}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleDeleteAll} style={{ display: total !== 0 ? 'block' : 'none' }}>清除已完成任务</button>
      </div>
    );
  }
}
