import * as types from './actionTypes'

interface Passage {
    query: string
    canonical: string
    parsed: any[]
    passage_meta: any[]
    passages: any[]
}

export const fetchPassage = (passageQuery: string): Promise<any> => {
    const API_KEY = process.env.REACT_APP_ESV_API_TOKEN
    const URL: string = `https://api.esv.org/v3/passage/text/?q=${passageQuery}&include-footnotes=False&include-headings=False&include-passage-references=False&include-short-copyright=False`

    return fetch(URL, {
        headers: {
            Authorization: 'Token ' + API_KEY,
        }
    })
        .then(response => response.json())
        .then(json => ({ passages: json.passages, title: json.canonical }))
}
