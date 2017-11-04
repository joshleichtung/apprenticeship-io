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
      <div>
        <h2>Hall of Fame</h2>
      <div style={styles.headshotList}>
        {this.renderApprenticeInfo()}
      </div>
    </div>
    )
  }
}

const styles = {
  headshotList: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}
