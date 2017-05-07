import React, { PropTypes } from 'react';

const WordDisplay = ({words}) => {
  let message

  if (!words) {
    message = "Fetching words.."
  }
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default WordDisplay
