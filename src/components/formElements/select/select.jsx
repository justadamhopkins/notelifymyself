import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ input, meta, label }) => {
  const arr = ['ops1', 'ops2', 'ops3', 'ops4']
  return (
    <React.Fragment>
      <label>{label}</label>
      <select
        {...input}
        {...arr.map((ops, index) => (
          <option value={ops} key={index}>
          {console.log(ops)}
          </option>
        ))
      }
        {...(meta.error && meta.touched && <span>{meta.error}</span>)}
      />
    </React.Fragment>
  )
}

Select.propTypes = {
  meta: PropTypes.object,
  input: PropTypes.object,
  label: PropTypes.string
}

export default Select
