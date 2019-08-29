import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ rows, cols, label }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea rows={rows} cols={cols}>
      </textarea>
    </div>
  )
}

TextArea.propTypes = {
  rows: PropTypes.string,
  cols: PropTypes.string,
  label: PropTypes.string
}


export default TextArea
