import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ApprenticePortrait extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTextDetails: false
    }
  }

  render() {
    return (
      <div style={styles.headshotContainer}>
        <img src={this.props.linkedin_image_url} style={styles.headshot} />
        <div className="apprenticeInfo" style={this.state.showTextDetails ? styles.apprenticeInfo : Object.assign({}, styles.apprenticeInfo, styles.hidden) } 
        onMouseEnter={() => this.setState({showTextDetails: true})}
        onMouseLeave={() => this.setState({showTextDetails: false})}
      >
          <div className="apprenticeName" style={styles.apprenticeName}>
            {`${this.props.first_name} ${this.props.last_name}`}
          </div>
          <div className="apprenticeshipCompany" style={styles.apprenticeshipCompany}>
            <h3 style={styles.portraitHeader}>apprenticeship</h3> {this.props.apprenticeship_company}
          </div>
          <div className="currentCompany" style={styles.currentCompany}>
            <h3 style={styles.portraitHeader}>
              current position
            </h3> 
            {this.props.current_title}
            <br /> 
            {this.props.current_company}
          </div>
        </div>
      </div>
    )
  }
}

ApprenticePortrait.propTypes = {
  linkedin_image_url: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  apprenticeship_company: PropTypes.string.isRequired,
  current_title: PropTypes.string.isRequired,
  current_company: PropTypes.string.isRequired
}

const styles = {
  headshot: {
    height: '240px',
    width: '240px',
    borderRadius: '50%'
  },
  headshotContainer: {
    margin: '12px',
    height: '240px',
    width: '240px',
    position: 'relative',
    padding: 0
  },
  headshotList: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  apprenticeInfo: {
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: "rgba(255, 255, 255, .75)",
    borderRadius: '50%',
    transition: "opacity 550ms",
    textAlign: "center",
    color: "rgb(40, 40, 40)",
  },
  hidden: {
    opacity: 0
  },
  apprenticeName: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "6px",
    marginTop: "6px"
  },
  apprenticeshipCompany: {
    fontSize: "18px",
    marginBottom: "6px"
  },
  currentCompany: {
    fontSize: "18px"
  },
  portraitHeader: {
    fontSize: "16px",
    fontVariant: "small-caps",
    letterSpacing: "2px",
    margin: 0,
    padding: 0,
    marginBottom: "2px"
  },
  italic: {
    fontStyle: "italic"
  }
}
