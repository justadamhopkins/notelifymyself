import React from 'react'
import styles from './styles.css'
import { CardTitle } from './cardTitle'
import { CardImage } from './cardImage'
import { CardPara } from './cardPara'
const Card = () => {
  return (
    <div className={styles.Card}>
      <CardTitle/>
      <CardImage/>
      <CardPara/>
    </div>
  )
}

export default Card
