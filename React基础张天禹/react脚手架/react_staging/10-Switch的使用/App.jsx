import React, { Component } from 'react'
import { Route ,Switch} from 'react-router-dom'

import About from './pages/about'
import Home from './pages/home'
import Header from './components/Header' // 一般组件
import MyNavList from './components/MyNavList' // 一般组件

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <NavLink activeClassName='active' className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName='active' className="list-group-item" to="/home">Home</NavLink> */}
              
              {/* 自己封装的NavList */}
              <MyNavList to='/about'>About</MyNavList>
              <MyNavList to='/home'>Home</MyNavList>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
