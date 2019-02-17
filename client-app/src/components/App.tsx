import React, { Component } from 'react'
import NavBar from './NavBar'
import '../css/App.css'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { fetchPassage } from '../js/actions/actions';

// const store: Store = createStore()

class App extends Component<{}, {passages: any[]}> {
  constructor (props: any) {
    super(props)

    this.state = {
      passages: []
    }
  }

  public componentWillMount () {
    fetchPassage('John+3').then(passages => { 
      this.setState({passages})
    })
  }
  public render () {
    return (
      // <Provider store={store}>
      <div className='App'>
        <NavBar />
        <h1>John 1</h1>
        {this.state.passages.map((passage, i) => <p key={i}>{passage}</p>)}
      </div>
      // </Provider>
    )
  }
}

export default App
