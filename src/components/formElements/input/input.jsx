import React from 'react'
import PropTypes from 'prop-types'


const Input = ({ input, meta, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input
      {...input}
      placeholder={input.name}
      type={input.type}
      {...meta.error && meta.touched && <span>{meta.error}</span>}
      />
    </div>
  )
}

Input.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  label: PropTypes.string
}

export default Input
