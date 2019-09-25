import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
const CardTitle = ({ title, subtitle, pictures }) => {
  return (
    <div className={styles.CardTitle}>
      <div className={styles.CardImage}>
        <img src={`https://placeimg.com/300/200/${pictures}`}/>
      </div>
      <div>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

CardTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  pictures: PropTypes.string
}

export default CardTitle
