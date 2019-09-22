import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ label, ops, input }) => {
  return (
    <div>
      <label>{label}</label>
        <select onChange={input.onChange}>
          {ops.map((op, index) => {
            return (
              <option value={op} key={index}>
                {op}
              </option>
            )
          })}
        </select>
    </div>
  )
}

Select.propTypes = {
  ops: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
  input: PropTypes.object
}

export default Select
