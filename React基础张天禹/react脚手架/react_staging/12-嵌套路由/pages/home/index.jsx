import React, { Component } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';

import MyNavlist from '../../components/MyNavList';
import News from './News'
import Message from './Message'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home的内容</h2>
        <ul className="nav nav-tabs">
          <li>
            <MyNavlist to="/home/news">News</MyNavlist>
          </li>
          <li>
            <MyNavlist to="/home/message">Message</MyNavlist>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    )
  }
}
