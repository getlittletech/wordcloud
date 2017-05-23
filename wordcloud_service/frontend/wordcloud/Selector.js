import React, { Component } from 'react'

const Selector = ({options, value, handleChange}) => {
    return (
      <select value={value} onChange={handleChange}>
        {options.map(optionItem => {
          console.log(optionItem)
          return (
            <option value={optionItem.value} key={optionItem.value}>{optionItem.text}</option>
          )
        })}
      </select>
    )
}

export default Selector
