import React from 'react'
import { shallow } from 'enzyme'
import { Card } from '.'

describe('<Card/>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<Card/>)
    expect(wrapper.length).toEqual(1)
  })
})
