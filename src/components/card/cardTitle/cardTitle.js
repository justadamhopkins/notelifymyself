import React from 'react'
import styles from './styles.css'
const CardTitle = () => {
  return (
    <div className={styles.CardTitle}>
      <div className={styles.CardImage}>
      <img src="https://placeimg.com/80/80/animals"/>
      </div>
      <div>
        <h5>My Card Title</h5>
        <p>My Card Subtitle</p>
      </div>
    </div>
  )
}

export default CardTitle
