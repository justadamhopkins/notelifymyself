import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ label, ops }) => {
  return (
    <div>
      <label>{label}</label>
        <select>
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
  label: PropTypes.string
}

export default Select
