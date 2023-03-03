import React, { Component } from 'react';
import {nanoid} from 'nanoid'

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
  state = {
    todos: [
      { id: '001', title: '吃饭', done: true },
      { id: '002', title: '睡觉', done: true },
      { id: '003', title: '打代码', done: false },
    ],
  };

  // 添加一个todo
  addTodo = (value) => {
    // 获取原todos
    const {todos} = this.state
    
    // 如果之前有相同的title 就不添加
    if(todos.some(item => {
      return value === item.title
    })) return
    // 准备todo的对象
    const todoObj = {
      id: nanoid(),
      title: value,
      done: false
    }
    // 追加一个新todo
    const newTodos = [todoObj, ...todos]
    // console.log(newTodos);
    // 修改todos
    this.setState({
      todos: newTodos
    })
  }
  
  // 更新一个todo
  updateTodo = (id,done) => {
    const {todos} = this.state
    
    const newTodos = todos.map(todo => {
      if(todo.id === id) return {...todo,done}
      else return todo
    })
    // 修改state状态
    this.setState({todos: newTodos})
  }

  // 删除一个todo
  deleteTodo = (id) => {
    const {todos} = this.state

    // 得到一个新的todos
    const newTodos = todos.filter(todo => todo.id !== id)
    this.setState({todos: newTodos})
  }

  // 全选按钮
  updateAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      return {...todo,done}
    })
    this.setState({todos: newTodos})
  }

  // 删除所有已完成的todo
  deleteAllTodo = () => {
    const {todos} = this.state
    const newTodos = todos.filter(todos => todos.done === false)
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state;
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} updateAllTodo={this.updateAllTodo} deleteAllTodo={this.deleteAllTodo}/>
          </div>
        </div>
      </div>
    );
  }
}
