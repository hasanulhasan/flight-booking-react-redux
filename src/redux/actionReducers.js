import { BOOK, DELETEBOOK } from "./actionTypes";

const initialState = {
  travelInfo: []
}

const actionReducers = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return {
        ...state,
        travelInfo: [...state.travelInfo, action.payload]
      }
    case DELETEBOOK:
      return {
        ...state,
        travelInfo: [...state.travelInfo.filter(innerItem => innerItem !== action.payload)]
      }
    default:
      return state
  }
}

export default actionReducers