import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'


const NavigationItem = ({ listItem }) => {
  return (
    <li>
      <Link to={`/category/${listItem}`}>{listItem}</Link>
    </li>
  )
}

NavigationItem.propTypes = {
  listItem: PropTypes.string
}


export default NavigationItem
