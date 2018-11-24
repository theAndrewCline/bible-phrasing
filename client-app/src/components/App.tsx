import React, { Component } from 'react'
import NavBar from './NavBar'
import '../css/App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <h1>John 1</h1>
        <p>
          In the beginning, there was the Word. The Word was with God and the
          word was God.
        </p>
      </div>
    )
  }
}

export default App
