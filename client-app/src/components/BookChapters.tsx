import React from 'react'
import { bibleChapters } from '../bible-chapters'

function BookChapters (props: any) {
  const { bookTitle, setPassage } = props
  const numberOfChapters = bibleChapters[bookTitle]
  const chapters = []
  for (let i = 0; i < numberOfChapters; i += 1) { chapters.push(i + 1) }

  return (
    <div>
      <h1>{bookTitle}</h1>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none'
        }}>
        {chapters.map(x => (
          <li
            style={{
              width: '1.5em',
              height: '1.5em',
              background: 'black',
              color: 'white',
              margin: '0.5em'
            }}
            key={x}
            onClick={() => setPassage(bookTitle, x)}>
            {x}
          </li>
        ))}
      </ul>
    </div>
  )
}

export { BookChapters }