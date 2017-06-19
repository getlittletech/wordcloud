import React, { Component } from 'react'
import {Style} from 'radium'

export const CommonVars = {
  primaryColor: '#f4d66f',
  secondaryColor: '#d05754',
  thirdColor: '#41a1dd'
}

const MainStyle = () => {
    return (
      <Style
        rules={{
          body: {
            backgroundColor: CommonVars.primaryColor,
            fontFamily: 'Lucida Console, Monaco, monospace'
          }
        }}
      />
    )
}

export default MainStyle
