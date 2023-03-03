import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import {connect} from 'react-redux'
import {saveTitleAction} from '../../../redux/actions/menu'
import menuList from '../../../config/menu';
const { SubMenu } = Menu;

class Nav extends Component {
  // 动态生成菜单(递归)
  createMenu = (menuList) => {
    return menuList.map(item => {
      if(!item.children) {
        return (
          <Menu.Item key={item.key} onClick={() => this.props.saveTitle(item.title)}>
            <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }else {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.createMenu(item.children)}
          </SubMenu>
        )
      }
      
    })
  
  }


  render() {
    const key = this.props.location.pathname.split('/').slice(-1)
    return (
      <div>
        <div className="slider-title">后台管理系统</div>
        <div>
          <Menu
            defaultSelectedKeys={key}
            defaultOpenKeys={this.props.location.pathname.split('/').slice(2)}
            mode="inline"
            theme="dark"
          >
            {
              this.createMenu(menuList)
            }
          </Menu>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({}),
  {
    saveTitle: saveTitleAction
  }
)(withRouter(Nav))
