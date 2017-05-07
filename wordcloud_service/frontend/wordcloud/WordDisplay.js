import React, { PropTypes } from 'react';

const WordDisplay = ({words}) => {
  let message

  return (
    <ul>
      {words.map(word => {
        return (
          <li>{word[0]}: {word[1]}</li>
        )
      })}
    </ul>
  )
}

export default WordDisplay
