import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component{
  render(){
    return(
    <header style={styles.header}>
      <div className="logo" style={styles.logo}>

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
    width: '10%',
    height: '100%',
    float: 'left',
    backgroundImage: 'linear-gradient(-134deg, rgba(48,35,174,0.50) 0%, #C86DD7 100%)'
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