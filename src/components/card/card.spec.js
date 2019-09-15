import React from 'react'
import { mount } from 'enzyme'
import { Card } from '.'

describe('<Card/>', () => {
  it('Should render component', () => {
    const wrapper = mount(<Card/>)
    expect(wrapper.length).toEqual(1)
  })
})
