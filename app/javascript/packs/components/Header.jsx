import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component{
  render(){
    return(
    <header style={styles.header}>
      <div className="logo">
        <img src={require('../images/placeholder_logo')} style={styles.logo} />
      </div>
      <div className="header-links" style={styles.header_links}>
        <ul>
          <li style={styles.header_links_li}><a href="/" style={styles.anchors}>Employers</a></li>
          <li style={styles.header_links_li}><a href="/" style={styles.anchors}>Apprentices</a></li>
          <li style={styles.header_links_li}><a href="/" style={styles.anchors}>Join the Communitty</a></li>
        </ul>
      </div>
    </header>
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
    width: '30px',
    float: 'left',
    paddingLeft: '20px',
    paddingTop: '10px'
  },
  header_links: {
    float: 'right',
    position: 'relative',
    top: '10%'
  },
  header_links_li: {
    display: 'inline',
    padding: '10px'
  },
  anchors: {
    textDecoration: 'none',
    color: 'black'
  }
}