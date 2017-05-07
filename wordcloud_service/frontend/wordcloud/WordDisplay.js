import React, { Component, PropTypes } from 'react';
import WordCloudLib from 'wordcloud'
import { TagCloud } from "react-tagcloud"

const canvasStyle = {
  width: '100%'
};

class WordDisplay extends Component {

  componentDidUpdate() {
    WordCloudLib(document.getElementById('my_canvas'), {
      list: this.props.words, minSize: '20px'
    } )
  }

  render() {
    const data = this.props.words.map(word => {
      return {value: word[0], count: word[1]}
    })
    return (
      <div>
      <canvas id="my_canvas" style={canvasStyle}></canvas>

      <TagCloud minSize={12}
            maxSize={35}
            tags={data}
            onClick={tag => alert(`'${tag.value}' was selected!`)} />
      </div>
    )
  }
}

export default WordDisplay
