import React from 'react'
import PropTypes from 'prop-types'
import { NavigationItem } from './navigationItem'
import styles from './styles.css'

const NavigationItems = ({ categoryList }) => {
  return (
    <ul className={styles.NavigationItems}>
      {Object.keys(categoryList).map((id) => {
        return (
          <NavigationItem key={id} listItem={categoryList[id].category}/>
        )
      })}
    </ul>
  )
}

NavigationItems.propTypes = {
  categoryList: PropTypes.object
}

export default NavigationItems
