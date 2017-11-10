import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component{
  render(){
    return(
    <div className="header">
      <div className="logo">
      </div>
      <div className="header-links">
        <ul>
          <li><a href="/">Employers</a></li>
          <li><a href="/">Apprentices</a></li>
          <li><a href="/">Join the Communitty</a></li>
        </ul>
      </div>
    </div>
    )
  }
}