import React, { Component, PropTypes } from 'react'
import SourceChooser from './SourceChooser'
import WordDisplay from './WordDisplay'
import Feedback from './Feedback'

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
    console.log("WordCloud render")
    const words = this.props.wordcloud.words
    const isFetching = this.props.wordcloud.isFetching
    const isError = this.props.wordcloud.isError
    return (
      <div>
        <p>
          Word Cloud Service
        </p>
        <SourceChooser />
        <Feedback isFetching={isFetching} isError={isError} />
        <WordDisplay words={this.props.wordcloud.words} />
      </div>
    )
  }
}

export default WordCloud
