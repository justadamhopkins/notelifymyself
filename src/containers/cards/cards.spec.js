import React from 'react'
import { mount } from 'enzyme'
import { Cards } from './cards'

describe('<Cards/>', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  const props = {
    cards: {
      11: {
        id: '11',
        pictures: 'animals',
        title: 'mr',
        subtitle: 'adam',
        note: 'i love you'
      }
    },
    deleteCard: jest.fn(),
    removeCardEle: jest.fn()
  }
  it('Should render component', () => {
    const cards = mount(<Cards {...props}/>)
    expect(cards).toMatchSnapshot()
  })
  it('should render a card', () => {
    const cards = mount(<Cards {...props}/>)
    expect(cards.find('.CardTitle').length).toBe(1)
    expect(cards.find('.CardImage').length).toBe(2)
    expect(cards.find('.CardPara').length).toBe(1)
    expect(cards.find('.close').length).toBe(1)
  })
  it('Should delete a card', () => {
    const mockedEvent = {
      target: {
        parentElement: {
          parentElement: {
            dataset: {
              id: 11
            }
          }
        }
      }
    }
    const cards = mount(<Cards {...props}/>)
    cards.find('.close').simulate('click', mockedEvent)
    expect(props.removeCardEle).toHaveBeenCalledTimes(1)
    expect(props.removeCardEle).toHaveBeenCalledWith(11)
  })
})
