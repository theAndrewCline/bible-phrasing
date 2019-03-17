import React, { Component } from 'react'
import NavBar from './NavBar'
import '../css/App.css'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { fetchPassage } from '../js/actions/actions'
import { BookList } from './BookList'
import { BookChapters } from './BookChapters'
import { Modal } from './Modal'

// const store: Store = createStore()

class App extends Component<{}, {
  passages: any[],
  selectingPassage: boolean,
  book: string,
  title: string,
  selectedBook: string
}> {
  constructor (props: any) {
    super(props)

    this.state = {
      passages: [],
      selectingPassage: false,
      book: '',
      title: '',
      selectedBook: ''
    }

    this.selectPassage = this.selectPassage.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.setPassage = this.setPassage.bind(this)
    this.selectBook = this.selectBook.bind(this)
  }

  public componentWillMount () {
    this.setPassage('John', '3')
  }

  closeModal () {
    this.setState({ selectedBook: '', selectingPassage: false })
  }

  selectBook (bookTitle: string) {
    this.setState({ selectedBook: bookTitle })
  }

  selectPassage () {
    this.setState({ selectingPassage: true })
    fetchPassage('John+3').then(passages => {
      this.setState({ passages })
    })
  }

  setPassage (book: string, chapter: string) {
    fetchPassage(`${book}+${chapter}`)
      .then(({ passages, title }) => {
        this.setState({ passages, title, selectingPassage: false, selectedBook: '' })
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

        {this.state.selectingPassage ?
          <Modal
            closeModal={this.closeModal}>
            {this.state.selectedBook === ''
              ? <BookList selectBook={this.selectBook} />
              : <BookChapters setPassage={this.setPassage} bookTitle={this.state.selectedBook} />}
          </Modal> : null}
      </div>
      // </Provider>
    )
  }
}

export default App
