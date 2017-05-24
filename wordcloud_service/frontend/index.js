import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import App from './main/App'
import MainStyle from './main/Style'
import mainReducer from './main/reducer'
import {StyleRoot} from 'radium'

const store = createStore(
  mainReducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <StyleRoot>
      <MainStyle />
      <App />
    </StyleRoot>
  </Provider>,
  document.getElementById('root')
)
