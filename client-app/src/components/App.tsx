import React, { Component } from 'react'
import NavBar from './NavBar'
import '../css/App.css'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { fetchPassage } from '../js/actions/actions';

// const store: Store = createStore()

class App extends Component<{}, {
  passages: any[],
  selectingPassage: boolean,
  book: string,
  title: string
}> {
  constructor (props: any) {
    super(props)

    this.state = {
      passages: [],
      selectingPassage: false,
      book: '',
      title: ''
    }

    this.selectPassage = this.selectPassage.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.setPassage = this.setPassage.bind(this)
  }

  public componentWillMount () {
    this.setPassage('John', '3')
  }

  selectPassage () {
    this.setState({ selectingPassage: true })
  }

  closeModal () {
    this.setState({ selectingPassage: false })
  }

  setPassage (book: string, chapter: string) {
    fetchPassage(`${book}+${chapter}`)
      .then(({ passages, title }) => {
        this.setState({ passages, title, selectingPassage: false })
      })
  }

  public render () {
    return (
      // <Provider store={store}>
      <div className='App'>
        <NavBar />

        <button
          onClick={() => this.selectPassage()}>
          Select A Passage
        </button>

        <h1>{this.state.title}</h1>

        {this.state.passages.map((passage, i) => <p key={i}>{passage}</p>)}

        { this.state.selectingPassage ?
        <Modal
          closeModal={this.closeModal}>
          <h1>Torah</h1>
          <ul>
            <li onClick={() => this.setPassage('Genesis', '1')}>Genesis</li>
            <li onClick={() => this.setPassage('Exodus', '1')}>Exodus</li>
            <li onClick={() => this.setPassage('Leviticus', '1')}>Leviticus</li>
            <li onClick={() => this.setPassage('Numbers', '1')}>Numbers</li>
            <li onClick={() => this.setPassage('Deuteronomy', '1')}>Deuteronomy</li>
          </ul>
        </Modal> : null }
      </div>
      // </Provider>
    )
  }
}

interface ModalProps {
  closeModal():void,
  children: any
}

function Modal (props: ModalProps) {
  const { closeModal, children } = props
  return (
    <div>
      <div
        className="modal-backdrop"
        onClick={() => closeModal() }>
      </div>
      <div className="modal">
        {children}
      </div>
    </div>
  )
}

export default App
