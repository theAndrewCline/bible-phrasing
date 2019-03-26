import React, { Component, useState, useEffect } from 'react'
import NavBar from './NavBar'
import '../css/App.css'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { fetchPassage } from '../js/actions/actions'
import { BookList } from './BookList'
import { BookChapters } from './BookChapters'
import { Modal } from './Modal'

// const store: Store = createStore()

function App () {
  const [ passages, setPassages ]  = useState([])
  const [ selectingPassage, setSelectingPassage ] = useState(false)
  const [ title, setTitle ] = useState('')
  const [ book, setBook ] = useState('')
  const [ selectedBook, setSelectedBook ] = useState('')
  const [ initialized, setInitialized ] = useState(true)

  const closeModal = () => {
    setSelectingPassage(false)
    setBook('')
  }

  const getPassages = (book:string, chapter:string) => {
    fetchPassage(`${book}+${chapter}`)
      .then(({ passages, title }) => {
        setPassages(passages)
        setTitle(title)
        setSelectingPassage(false)
        setSelectedBook('')
      })
  }

  useEffect(() => {
    getPassages('John', '1')
  }, [ initialized ])

  return (
    // <Provider store={store}>
    <div className='App'>
      <NavBar />

      <button
        onClick={() => setSelectingPassage(true)}>
        Select A Passage
      </button>

      <h1>{title}</h1>

      {passages.map((passage, i) => <p key={i}>{passage}</p>)}

      { selectingPassage ?
      <Modal
        closeModal={closeModal}>
        {selectedBook === ''
        ? <BookList selectBook={setSelectedBook} />
        : <BookChapters getPassage={getPassages} bookTitle={selectedBook} />}
      </Modal> : null }
    </div>
    // </Provider>
  )
}

export default App
