import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import { CardTitle } from '../cardTitle'
import { CardImage } from '../cardImage'
import { CardPara } from '../cardPara'
import { CloseIcon } from '../../closeIcon'
const CardList = ({ id, deletedCard, title, subtitle, pictures, note }) => {
  return (
    <li className={styles.Cardlist} data-id={id}>
      <CloseIcon deletedCard={deletedCard} />
      <CardTitle title={title} subtitle={subtitle} pictures={pictures} />
      <CardImage pictures={pictures} />
      <CardPara note={note} />
    </li>
  )
}

CardList.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  pictures: PropTypes.string,
  note: PropTypes.string,
  deletedCard: PropTypes.func
}

export default CardList
