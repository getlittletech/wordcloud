import React from 'react';

const Feedback = ({isError, isFetching}) => {
  let message = "Word cloud:"

  if (isError) {
    message = "Sorry, could not fetch words due to an error."
  } else if (isFetching) {
    message = "Fetching words..."
  }
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default Feedback
