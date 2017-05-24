import React, { Component } from 'react'
import {Style} from 'radium'

export const CommonVars = {
  primaryColor: '#F39C12',
  secondaryColor: '#b712f3',
  thirdColor: '#128ef3'
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
