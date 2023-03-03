import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';
export default class MyNavlist extends Component {
  render() {
    return (
      // <NavLink activeClassName='active' className="list-group-item" to={this.props.to}>{this.props.children}</NavLink>
      <NavLink activeClassName='active' className="list-group-item" {...this.props}></NavLink>
    )
  }
}
