import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const CardImage = ({ pictures }) => {
  return (
    <div className={styles.CardImage}>
      <img src={`https://placeimg.com/300/200/${pictures}`}/>
    </div>
  )
}

CardImage.propTypes = {
  pictures: PropTypes.string
}

export default CardImage
