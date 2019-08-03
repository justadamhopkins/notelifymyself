import React from 'react'
import styles from './styles.css'
import { CardTitle } from './cardTitle'
import { CardImage } from './cardImage'
const Card = () => {
  return (
    <div className={styles.Card}>
      <CardTitle/>
      <CardImage/>
    </div>
  )
}

export default Card
