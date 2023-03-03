import React, { Component } from 'react'
import './header.css'
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import dayjs from 'dayjs'
import {connect} from 'react-redux'
import menuList from '../../../config/menu';
class Header extends Component {
  state = {
    time: dayjs().format('YYYY年 MM月DD日 HH:mm:ss'),
    title: ''
  }
  componentDidMount() {
    // 开启循环定时器
    this.timer = setInterval(() => {
      this.setState({time: dayjs().format('YYYY年MM月DD日 HH:mm:ss')})
    }, 1000);

    // 刷新的时候获得title，立即调用getTitle
    // 点击菜单时获得title，是从redux里取的
    this.getTitle()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  // 退出登录
  layout = () => {
    this.props.history.replace('/login')
  }
  
  // 获得标题
  getTitle = () => {
    const path = this.props.location.pathname
    let title = ''
    menuList.forEach(item => {
      if(!item.children) {
        if(item.path === path){
          title = item.title
        }
      }else {
        const pathObj = item.children.find(item2 => {
          return item2.path === path
        })
        if(pathObj) title = pathObj.title
      }
    })
    this.setState({title})
  }

  render() {
    const {time} = this.state
    return (
      <div className='header'>
        <div className='header-user'>
          <div className='uname'>欢迎,admin</div>
          <Button type='link' onClick={this.layout}>退出</Button>
        </div>
        <div className='header-weather'>
          <div className='title'>
            {this.props.title || this.state.title}
          </div>
          <div className='time'>{time}</div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({title: state.title}),
  {}
)(withRouter(Header))