import { BOOK, DELETEBOOK } from "./actionTypes"

export const bookDate = (value) => {
  return {
    type: BOOK,
    payload: value,
  }
}

export const deleteBook = (value) => {
  return {
    type: DELETEBOOK,
    payload: value
  }
}