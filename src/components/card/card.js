import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import { CardList } from './cardList'
const Card = ({ card, deletedCard }) => {
  if (!card) return false
  return (
    <div className={styles.Card}>
      <ul>
        {Object.keys(card).map(id => {
          return (
            <CardList
              key={id}
              id={id}
              deletedCard={deletedCard}
              title={card[id].title}
              subtitle={card[id].subtitle}
              pictures={card[id].pictures}
              note={card[id].note}
            />
          )
        })}
      </ul>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object,
  deletedCard: PropTypes.func
}

export default Card
