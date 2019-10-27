import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ rows, cols, label, input, meta }) => {
  const { onChange, name } = input
  return (
    <div>
      <label>{label}</label>
      <textarea onChange={onChange} name={name} placeholder={name} rows={rows} cols={cols}>
      </textarea>
      {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
    </div>
  )
}

TextArea.propTypes = {
  rows: PropTypes.string,
  cols: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object
}


export default TextArea
