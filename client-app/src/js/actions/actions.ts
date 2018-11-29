import * as types from './actionTypes'
import { string } from 'prop-types'

interface Iparams {
  q: string
  'indent-poetry': boolean
  'include-headings': boolean
  'include-footnotes': boolean
  'include-verse-numbers': boolean
  'include-short-copyright': boolean
  'include-passage-references': boolean
}

const API_KEY = process.env.ESV_API_TOKEN

const params = {
  q: string,
  'indent-poetry': false,
  'include-headings': false,
  'include-footnotes': false,
  'include-verse-numbers': false,
  'include-short-copyright': false,
  'include-passage-references': false
}

// const url = (urlParams: any) => {
//   let originalUrl = new URL('https://api.esv.org/v3/passage/text')
//   originalUrl.searchParams = new URLSearchParams(urlParams)
// }

// export const receiveVerse = json => {
//   return { type: types.RECEIVE_VERSES, verses: json }
// }

// export const fetchVerse = () => {
//   return dispatch => {
//     return fetch(url(params), {
//       method: 'GET',
//       mode: 'cors',
//       credentials: 'include',
//       cache: 'default',
//       headers: {
//         Authorization: 'Token' + API_KEY
//       }
//     })
//   }
// }
