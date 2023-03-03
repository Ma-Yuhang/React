import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import Login from './containers/login'
import Admin from './containers/admin'
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/admin' component={Admin}/>
        <Redirect to='/admin/home'/>
      </Switch>
    )
  }
}
