import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import { CardTitle } from './cardTitle'
import { CardImage } from './cardImage'
import { CardPara } from './cardPara'
const Card = ({ card }) => {
  if(!card) return false
  return (
    <div className={styles.Card}>
      <ul>
      {Object.keys(card).map((id) => {
        return (
          <li className={styles.cardWrap} key={id}>
            <CardTitle
              title={card[id].title}
              subtitle={card[id].subtitle}
              pictures={card[id].pictures}/>
            <CardImage pictures={card[id].pictures}/>
            <CardPara note={card[id].note}/>
        </li>
        )
      })}
      </ul>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object
}

export default Card
