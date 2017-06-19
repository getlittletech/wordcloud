import React, { Component } from 'react'
import styles from './selector.css'

const Selector = ({options, value, handleChange}) => {
    return (
      <div className={styles.styledSelect}>
        <select value={value} onChange={handleChange}>
          {options.map(optionItem => {
            console.log(optionItem)
            return (
              <option value={optionItem.value} key={optionItem.value}>{optionItem.text}</option>
            )
          })}
        </select>
      </div>
    )
}

export default Selector
