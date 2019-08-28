import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ label, ops }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

Select.propTypes = {
  ops: PropTypes.array,
  label: PropTypes.string
}

export default Select
