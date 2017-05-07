import React, { Component, PropTypes } from 'react'
import SourceChooser from './SourceChooser'
import WordDisplay from './WordDisplay'

import { fetchWords } from './actions'

class WordCloud extends Component {

  //static propTypes = {}

  constructor() {
    super()

    this.dataSource = {
      source: 'nytimes'
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchWords('nytimes'))
  }

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
