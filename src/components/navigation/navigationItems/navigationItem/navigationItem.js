import React from 'react'
import PropTypes from 'prop-types'


const NavigationItem = ({ children }) => {
  return (
    <li>
      {children}
    </li>
  )
}

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired
}


export default NavigationItem
