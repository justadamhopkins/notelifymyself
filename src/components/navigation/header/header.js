import React from 'react'
import PropTypes from 'prop-types'
import { Hamburger } from '../sideDraw/hamburger'
import styles from './styles.css'

const Header = ({ sideDrawToggle, isVisible }) => {
  return (
      <header className={styles.Header}>
        <Hamburger
        toggleSideDraw={sideDrawToggle}
        animateHamBurger={isVisible}/>
      </header>
  )
}

Header.propTypes = {
  sideDrawToggle: PropTypes.func,
  isVisible: PropTypes.bool
}

export default Header
