import React, { Component } from 'react'
import axios from 'axios'
import ApprenticePortrait from './ApprenticePortrait'

export default class ApprenticeTab extends Component {
  constructor(props) {
    super(props)

    this.state = {
      apprentices: []
    }
  }

  componentDidMount() {
    axios.get('/api/apprentices')
      .then(({data}) => {
        console.log(data)
        this.setState({
          apprentices: data
        })
      })
      .catch(error => console.log(error))

    axios.get('/api/profile')
      .then(({data}) => console.log(data))
      .catch(console.log)
  }

  unhide(e) {
    console.log("unhide: ", e.target)
    e.target.classList.remove('hidden')
  }

  hide(e) {
    console.log("hide: ", e.target)
    e.target.classList.add('hidden')
  }

  renderApprenticeInfo() {
    return this.state.apprentices.map((apprentice, index) => (
      <ApprenticePortrait key={index} {...apprentice} />
    ))
  }

  render() {
    return (
      <div style={styles.centerText}>
        <div style={styles.headshotList}>
          <h2 className="apprentice-title" style={styles.apprenticeTitle} >Hall of Fame</h2>
          {this.renderApprenticeInfo()}
        </div>
        <a href="/auth/linkedin">Login with LinkedIn and tell us your story</a>
      </div>
    )
  }
}

const styles = {
  headshotList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: '16px'
  },
  apprenticeTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: '2.5em',
  },
  centerText: {
    textAlign: 'center',
    paddingBottom: '16px'
  }
}
