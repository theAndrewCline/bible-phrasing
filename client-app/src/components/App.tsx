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
    fetchPassage('John+3:16-18').then(response => { 
      this.setState({passages: response })
    })
  }
  public render () {
    return (
      // <Provider store={store}>
      <div className='App'>
        <NavBar />
        <h1>John 1</h1>
        {this.state.passages.map((passage) => <p>{passage}</p>)}
        </div>
      // </Provider>
    )
  }
}

export default App
