import { connect } from 'react-redux'

import React from 'react'
import WordCloud from '../wordcloud/WordCloud'

function mapStateToProps(state) {
  return {
    wordcloud: state.wordcloud
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordCloud)

export default App
