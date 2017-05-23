import React, { Component } from 'react'
import commonStyles from './styles'
import Radium from 'radium'

const style = {
  hover: {
    ":hover": {
				color: commonStyles.thirdColor,
				cursor: "pointer"
		}
  }
}

const Header = (props) => {
    return (
      <h1 style={style.hover}>
        {props.children}
      </h1>
    )
}

export default Radium(Header)
