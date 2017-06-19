import React, { Component } from 'react'
import SourceSelector from './SourceSelector'
import WordDisplay from './WordDisplay'
import {CommonVars} from '../main/Style'
import Header from './Header'
import styles from './styles.css'

import { fetchWords, fetchWordsSuccess } from './actions'

const style = {
  wrapper: {
    width: '100%',
    color: CommonVars.secondaryColor
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
      alert("this feature is not implemented, just NY Times this time.")
      this.props.dispatch(fetchWordsSuccess({frequency: [
        ["this", 2],
        ["feature", 7],
        ["is", 8],
        ["not", 5],
        ["implemented", 4],
        ["just", 3],
        ["NY Times", 2],
        ["this", 3],
        ["time", 1]
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
    console.log(styles)
    return (
      <div style={style.wrapper}>
        <Header value="Whatsoever">Word Cloud Service</Header>
        <SourceSelector handleChange={this.handleSourceChange} />
        <WordDisplay words={words} isFetching={isFetching} isError={isError}/>
      </div>
    )
  }
}

export default WordCloud
