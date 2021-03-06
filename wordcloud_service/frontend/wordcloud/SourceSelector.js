import React, { Component } from 'react';
import Selector from './Selector'
import styles from './styles.css'

class SourceSelector extends Component {
  constructor() {
    super()

    this.options = [
      {value: "nytimes", text: "New York Times"},
      {value: "twitter", text: "Twitter"},
      {value: "rss", text: "RSS feed"}
    ]
    this.state = {
      source: this.options[0]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({source: event.target.value})
    this.props.handleChange(event.target.value)
  }

  render () {
    return (
      <div>
        Choose the source:
        <Selector value={this.state.source} options={this.options} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default SourceSelector
