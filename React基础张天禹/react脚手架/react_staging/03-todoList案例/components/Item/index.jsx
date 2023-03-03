import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './index.css';

export default class Item extends Component {

  // 对接收到的props进行类型限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
  }

  // 标识鼠标移入还是移出
  state = {mouse: false}

  // 鼠标移入移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  // 勾选某一个todo的回调
  handleChecked(id) {
    return (event) => {
      this.props.updateTodo(id,event.target.checked)
    }
  }

  // 点击删除按钮
  handleDelete(id) {
    if(window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const {id,title,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#bbb' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox"  checked={done} onChange={this.handleChecked(id)}/>
          <span>{title}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>
          删除
        </button>
      </li>
    );
  }
}
