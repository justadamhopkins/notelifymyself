import React from 'react'
import { mount } from 'enzyme'
import { Cards } from '.'


describe('<Cards/>', () => {
  it('Should render component', () => {
    const cards = mount(<Cards/>)
    expect(cards).toMatchSnapshot()
  })
})
