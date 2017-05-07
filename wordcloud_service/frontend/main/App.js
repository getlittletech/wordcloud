import { connect } from 'react-redux'

import React from 'react'
import WordCloud from '../wordcloud/WordCloud'

function mapStateToProps(state) {
  return {
    wordcloud: state.wordcloud
  }
}

const App = connect(
  mapStateToProps
)(WordCloud)

export default App
