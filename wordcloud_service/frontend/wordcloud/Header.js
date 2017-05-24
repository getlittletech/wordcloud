import React, { Component } from 'react'
import {CommonVars} from '../main/Style'
import Radium from 'radium'

const style = {
  hover: {
    ":hover": {
				color: CommonVars.thirdColor,
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
