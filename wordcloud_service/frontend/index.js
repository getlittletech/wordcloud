import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import WordCloud from './wordcloud/WordCloud'
import mainReducer from './main/reducer'

//const store = createStore(mainReducer)
const store = {}

render(
  <Provider store={store}>
    <WordCloud />
  </Provider>,
  document.getElementById('root')
)
