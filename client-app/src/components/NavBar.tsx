import React, { Component } from 'react'
import '../css/NavBar.css'

class NavBar extends Component {
  render () {
    return (
      <div id='NavBar'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Sign In</li>
        </ul>
      </div>
    )
  }
}

export default NavBar
