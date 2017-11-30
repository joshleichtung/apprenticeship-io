import React, { Component } from 'react'

export default class ApprenticeInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      full_name: '',
      current_title: '',
      current_company: '',
      apprenticeship_company: '',
      apprenticeship_year: '',

      appre
      
    }
  }

  render() {
     return (
      <div className="apprentice-profile">
        <h2>Apprentice Profile</h2>
      </div>
     )
  }
}
