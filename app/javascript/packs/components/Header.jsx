import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component{
  render(){
    return(
    <div className="header" style={styles.header}>
      <div className="logo" style={styles.logo}>

      </div>
      <div className="header-links" style={styles.header_links}>
        <ul>
          <li style={styles.header_links_li}><a href="/">Employers</a></li>
          <li style={styles.header_links_li}><a href="/">Apprentices</a></li>
          <li style={styles.header_links_li}><a href="/">Join the Communitty</a></li>
        </ul>
      </div>
    </div>
    )
  }
}

const styles = {
  header: {
      width: '100%',
      height: '60px',
      background: 'white',
      margin: 'auto'
  },
  logo: {
    width: '15%',
    height: '100%',
    float: 'left'
  },
  header_links: {
    float: 'right',
    position: 'relative',
    top: '35%'
  },
  header_links_li: {
    display: 'inline',
    padding: '10px'
  }
}