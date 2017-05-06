import * as constants from './constants'

export default function words(state = [], action) {
  switch (action.type) {
    case constants.ADD_WORDS:
      return [...state, ...action.payload]
    default:
      return state
  }
}
