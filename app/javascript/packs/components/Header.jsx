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
        <ul style={styles.header_links_ul}>
          <li style={styles.header_links_li}><a href="/" style={styles.anchors}>Employers</a></li>
          <li style={styles.header_links_li}><Link to="/hall_of_fame" style={styles.anchors}>Apprentices</Link></li>
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
      background: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  logo: {
    width: '30px',
    paddingLeft: '10px'
  },
  header_links: {

  },
  header_links_ul:{
    display: 'flex',
    listStyle: 'none',
    flexWrap: 'wrap'
  },
  header_links_li: {
    margin: '0px 15px'
  },
  anchors: {
    textDecoration: 'none',
    color: 'black'
  }
}
