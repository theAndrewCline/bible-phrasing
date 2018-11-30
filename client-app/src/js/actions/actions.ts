import * as types from './actionTypes'

export const fetchPassage = (passageQuery: string) => {
    const API_KEY = process.env.ESV_API_TOKEN
    const URL: string = `https://api.esv.org/v3/passage/text/?q=${passageQuery}&include-footnotes=False&include-headings=False&include-passage-references=False&include-short-copyright=False`
    let passage


    fetch(URL, {
    headers: {
        Authorization: 'Token' + API_KEY
    }
    })
    .then(response => response.json())
    .then(json => {
        passage = json.passage
    })

    return passage
}

