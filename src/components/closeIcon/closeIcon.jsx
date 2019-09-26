import React from 'react'
import PropTypes from 'prop-types'
import closeIcon from '../../images/cross.svg'
import styles from './styles.css'

const CloseIcon = ({ deleteCard }) => {
  return (
    <button onClick={deleteCard} className={styles.close}><img src={closeIcon} width='30' height='30'/></button>
  )
}

CloseIcon.propTypes = {
  deleteCard: PropTypes.func
}

export default CloseIcon
