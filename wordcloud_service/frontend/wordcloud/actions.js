import * as constants from './constants'

const frequentWordsEndpoint = '/api/frequentwords?source='

export function fetchWords(source) {
  console.log("fetchWords!")
  return dispatch => {
    console.log("fetchWords: will dispatch fetchWordsRequest");
    dispatch(fetchWordsRequest())
    return fetch(frequentWordsEndpoint + source)
      .then(res => {
        console.log("fetchWords: got results");
        return res.json()
      })
      .then(json => {
        console.log("fetchWords json result: ", json)
        return dispatch(fetchWordsSuccess(json));
      })
      .catch(error => {
        console.log("fetchWords failure: ", error);
        return dispatch(fetchWordsFailure(error));
      })
  }
}

export function fetchWordsRequest() {
  return {
    type: constants.FETCH_WORDS_REQUEST
  }
}

export function fetchWordsSuccess(body) {
  return {
    type: constants.FETCH_WORDS_SUCCESS,
    payload: body
  }
}

export function fetchWordsFailure(error) {
  return {
    type: constants.FETCH_WORDS_FAILURE,
    payload: error
  }
}
