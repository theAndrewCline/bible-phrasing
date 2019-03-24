import React from 'react'
import { bibleChapters } from '../bible-chapters'

const books: any[] = []
for (const bookName in bibleChapters) {
  books.push(bookName)
}

function BookList (props: any) {
  const { selectBook } = props
  return (
    <div style={{ overflowY: 'auto', width: '100%', height: '100%' }}>
      <h1>Books</h1>
      <ul style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        listStyle: 'none'
      }}>
        {books.map(bookName => (
        <li
          key={bookName}
          style={{
            background: 'black',
            color: 'white',
            padding: '0.5em 1em',
            margin: '0.25em'
          }}
          onClick={() => selectBook(bookName)}>
          {bookName}
        </li>
        ))}
      </ul>
    </div>
  )
}

export { BookList }
