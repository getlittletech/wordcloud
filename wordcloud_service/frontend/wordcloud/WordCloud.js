import React, { Component, PropTypes } from 'react'
import SourceSelector from './SourceSelector'
import WordDisplay from './WordDisplay'
import Feedback from './Feedback'

import { fetchWords, fetchWordsSuccess } from './actions'

const style = {
  wrapper: {
    width: '100%'
  }
}

const emptyWords = []

class WordCloud extends Component {

  //static propTypes = {}

  constructor() {
    super()
    this.dataSource = {
      source: 'nytimes'
    }

    this.handleSourceChange = this.handleSourceChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchWords('nytimes'))
  }

  handleSourceChange(source) {
    if (source != 'nytimes') {
      alert("hej, you said it's enough with just NY Times!")
      this.props.dispatch(fetchWordsSuccess({frequency: [
        ["hej", 2],
        ["you", 7],
        ["said", 8],
        ["it's", 2],
        ["enough", 5],
        ["with", 4],
        ["just", 3],
        ["NY Times", 2]
      ]}))
    } else {
      this.props.dispatch(fetchWords('nytimes'))
    }
  }

  render() {
    console.log("WordCloud render props: ", this.props)
    const words = (this.props.wordcloud.words != null) ? this.props.wordcloud.words : emptyWords
    const isFetching = this.props.wordcloud.isFetching
    // for now, consider it an error when isFetching if false and words.length is 0
    const isError = this.props.wordcloud.isError || (isFetching == false && words.length == 0)
    return (
      <div style={style.wrapper}>
        <h1>
          Word Cloud Service
        </h1>
        <SourceSelector handleChange={this.handleSourceChange} />
        <Feedback isFetching={isFetching} isError={isError} />
        <WordDisplay words={words} />
      </div>
    )
  }
}

export default WordCloud
