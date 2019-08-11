import React from 'react'
import styles from './styles.css'
import { CardTitle } from './cardTitle'
import { CardImage } from './cardImage'
import { CardPara } from './cardPara'
const Card = () => {
  return (
    <div className={styles.Card}>
      <ul>
        <li className={styles.cardWrap}>
          <CardTitle />
          <CardImage />
          <CardPara />
        </li>
        <li className={styles.cardWrap}>
          <CardTitle />
          <CardImage />
          <CardPara />
        </li>
      </ul>
    </div>
  )
}

export default Card
