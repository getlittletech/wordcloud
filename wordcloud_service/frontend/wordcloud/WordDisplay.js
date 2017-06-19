import React, { Component } from 'react';
import WordCloudLib from 'wordcloud'
import Feedback from './Feedback'
import { TagCloud } from 'react-tagcloud'
import Radium from 'radium'

import Selector from './Selector'

const style = {
  wrapper: {
    width: '100%',
    marginTop: '10px'
    /*'@media (max-width: 600px)': {
      width: '50%'
    }*/
  },
  wordcloud: {
    marginTop: '40px'
  }
}

class WordDisplay extends Component {
  constructor() {
    super()
    this.typeOptions = [
      {value: "react-tagcloud", text: "react-tagcloud"},
      {value: "wordcloud_canvas", text: "wordcloud on canvas"}
    ]
    this.state = {
      type: this.typeOptions[0].value
    }

    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  componentDidUpdate() {
    if (this.state.type == "wordcloud_canvas") {
      let width = window.innerWidth
      console.log("width: ", width)
      WordCloudLib(document.getElementById('word_canvas'), {
        list: this.props.words,
        gridSize: Math.round(16 * width / 1024),
        weightFactor: function (size) {
          return Math.pow(size, 2.3) * width / 1024;
        }
      } )
    }
  }

  handleTypeChange(event) {
    this.setState({type: event.target.value});
  }

  render() {
    const data = this.props.words.map(word => {
      return {value: word[0], count: word[1]}
    })

    let wordCloud = null
    if (this.state.type == "react-tagcloud") {
      const colorOptions = {
           luminosity: 'dark',
           format: 'rgb'
      };
      wordCloud = <TagCloud minSize={12}
            maxSize={35}
            tags={data}
            colorOptions={colorOptions}
            onClick={tag => alert(`'${tag.value}' was selected!`)} />
    } else if (this.state.type == "wordcloud_canvas") {
      wordCloud = <canvas id="word_canvas" width="400" height="300"></canvas>
    }
    return (
        <div style={style.wrapper}>

          <div>
            Choose the type: <Selector value={this.state.type} options={this.typeOptions} handleChange={this.handleTypeChange} />
          </div>

          <Feedback isFetching={this.props.isFetching} isError={this.props.isError} />

          <div style={style.wordcloud}>
            {wordCloud}
          </div>
        </div>
    )
  }
}

export default Radium(WordDisplay)
