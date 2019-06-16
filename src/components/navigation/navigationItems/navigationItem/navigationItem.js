import React from 'react'
import PropTypes from 'prop-types'
// import styles from './styles.css'

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
