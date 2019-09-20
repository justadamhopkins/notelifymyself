import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ rows, cols, label, input }) => {
  const { onChange, name } = input
  return (
    <div>
      <label>{label}</label>
      <textarea onChange={onChange} name={name} placeholder={name} rows={rows} cols={cols}>
      </textarea>
    </div>
  )
}

TextArea.propTypes = {
  rows: PropTypes.string,
  cols: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object
}


export default TextArea
