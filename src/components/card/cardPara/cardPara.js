import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const CardPara = ({ note }) => {
  return (
    <div className={styles.CardPara}>
     <p>{note}</p>
    </div>
  )
}

CardPara.propTypes = {
  note: PropTypes.string
}

export default CardPara
