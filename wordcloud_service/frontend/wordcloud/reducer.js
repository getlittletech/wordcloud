import * as constants from './constants'

export default function wordcloud(state = {
  isFetching: false,
  words: [],
  isError: false
}, action) {
  switch (action.type) {
    case constants.FETCH_WORDS_REQUEST:
      return Object.assign({}, state, {isFetching: true, isError: false})
    case constants.FETCH_WORDS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        words: action.payload.frequency,
        isError: false
      })
    case constants.FETCH_WORDS_FAILURE:
    Object.assign({}, state, {
      isFetching: false, isError: true})
    default:
      return state
  }
}
