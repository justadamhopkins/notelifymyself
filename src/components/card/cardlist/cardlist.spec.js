import React from 'react'
import { shallow } from 'enzyme'
import { CardList } from '.'
import { CardTitle } from '../cardTitle'
import { CardImage } from '../cardImage'
import { CardPara } from '../cardPara'
import { CloseIcon } from '../../closeIcon'

describe('@CardList', () => {
  const props = {
    id: '11',
    deletedCard: jest.fn(),
    title: 'MR',
    subtitle: 'adam',
    pictures: 'animal',
    note: 'i love you'
  }
  it('Should render component', () => {
    const wrapper = shallow(<CardList {...props}/>)
    expect(wrapper.length).toEqual(1)
  })
  it('renders a card', () => {
    const wrapper = shallow(<CardList {...props}/>)
    expect(wrapper.find('.Cardlist').length).toEqual(1)
    expect(wrapper.find(CardTitle).length).toEqual(1)
    expect(wrapper.find(CardPara).length).toEqual(1)
    expect(wrapper.find(CloseIcon).length).toEqual(1)
    expect(wrapper.find(CardImage).length).toEqual(1)
    expect(wrapper.prop('data-id')).toEqual(props.id)
  })
})
