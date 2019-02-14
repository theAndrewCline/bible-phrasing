import React, { Component } from 'react'
import NavBar from './NavBar'
import '../css/App.css'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { fetchPassage } from '../js/actions/actions';

// const store: Store = createStore()

class App extends Component<{}, {passage: string}> {
  constructor (props: any) {
    super(props)

    this.state = {
      passage: ''
    }
  }

  public componentWillMount () {
    fetchPassage('John+3:16').then(passage => { 
      this.setState({passage: passage.passages[0]})
    })
  }
  public render () {
    return (
      // <Provider store={store}>
        <div className='App'>
          <NavBar />
          <h1>John 1</h1>
          <p>
            {this.state.passage}
          </p>
        </div>
      // </Provider>
    )
  }
}

export default App
