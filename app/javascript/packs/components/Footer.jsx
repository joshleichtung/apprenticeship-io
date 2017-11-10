import React, { Component } from 'react'

export default class Footer extends Component {
  render(){
    return(
      <footer>
        <div className="links">
        <ul>
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
      <div className="links">
        <ul>
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
      <div className="links">
        <ul>
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
      <div className="links">
        <ul>
          <li>
            About Us
          </li>
          <li>
            Contact
          </li>
        </ul>
      </div>
      </footer>
    )
  }
}