import React, { Component, PropTypes } from 'react'
import SourceChooser from './SourceChooser'
import WordDisplay from './WordDisplay'

class WordCloud extends Component {

  //static propTypes = {}

  render() {
    return (
      <div>
        <p>
          Word Cloud Service
        </p>
        <SourceChooser />
        <WordDisplay />
      </div>
    )
  }
}

export default WordCloud
