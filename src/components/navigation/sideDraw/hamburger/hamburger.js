import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'


const Hamburger = ({ toggleSideDraw, animateHamBurger }) => {
  return (
  <div className={[styles.Hamburger, animateHamBurger ? styles.animated : ''].join(' ')}
  onClick={toggleSideDraw}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
  </div>
  )
}

Hamburger.propTypes = {
  toggleSideDraw: PropTypes.func,
  animateHamBurger: PropTypes.bool
}

export default Hamburger
