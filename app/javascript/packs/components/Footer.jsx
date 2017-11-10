import React, { Component } from 'react'

export default class Footer extends Component {
  render(){
    return(
      <footer style={styles.footer}>
        <div className="links-container" style={styles.links_container}>
          <div className="links" style={styles.links}>
          <ul style={styles.ul}>
            <li>
              Home
            </li>
            <li>
              Concept
            </li>
            <li>
              Value
            </li>
            <li>
              Resources
            </li>
          </ul>
        </div>
        <div className="links" style={styles.links}>
          <ul style={styles.ul}>
            <li>
              Employers
            </li>
            <li>
              Concept & Value
            </li>
            <li>
              Map of Apprenticeships
            </li>
            <li>
              Resources
            </li>
          </ul>
        </div>
        <div className="links" style={styles.links}>
          <ul style={styles.ul}>
            <li>
              Apprentices
            </li>
            <li>
              Concept & Value
            </li>
            <li>
              Map of Apprenticeships
            </li>
            <li>
              Hall of Fame
            </li>
          </ul>
        </div>
        <div className="links" style={styles.links}>
          <ul style={styles.ul}>
            <li>
              About Us
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div className="join">
        <div style={styles.join_header}>
          Join the Community
        </div>
        <div className="footer_logos" style={styles.logos_container}>
          <img src={require('../images/footer_logos/eventbrite.png')} style={styles.logo} />
          <img src={require('../images/footer_logos/linkedin.png')} style={styles.logo}/>
          <img src={require('../images/footer_logos/mailchimp.png')} style={styles.logo}/>
          <img src={require('../images/footer_logos/medium.png')} style={styles.logo}/>
          <img src={require('../images/footer_logos/meetup.png')} style={styles.logo}/>
          <img src={require('../images/footer_logos/slack.png')} style={styles.logo}/>
        </div>
      </div>
      </footer>
    )
  }
}

const styles = {
  footer: {
    height: '250px',
    width: '100%',
    backgroundImage: 'linear-gradient(-134deg, rgba(48,35,174,0.50) 0%, #C86DD7 100%)',
    color: 'white'
  },
  ul: {
    listStyle: 'none',
    paddingRight: '40px',
    whiteSpace: 'nowrap'
  },
  links: {
    display: 'table-cell'
  },
  links_container: {
    paddingTop: '30px',
    width: '50%',
    margin: '0 auto'
  },
  join_header: {
    textAlign: 'center',
    margin: '15px'
  },
  logos_container: {
    textAlign: 'center'
  },
  logo: {
    width: '40px',
    margin: '10px'
  }
}
