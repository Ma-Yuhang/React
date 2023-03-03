import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css';

export default class Header extends Component {

  // 对接收到的props进行类型限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }


  // input中键盘按下的事件
  handleKeyUp = (event) => {
    const {keyCode,target} = event
    if(keyCode !== 13) return 
    if(target.value.trim() === '') {
      alert('输入不能为空！')
      return 
    }
    // 将title传给App
    this.props.addTodo(target.value)
    // 清空输入
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    );
  }
}
