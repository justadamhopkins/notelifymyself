import React from 'react'
import { shallow } from 'enzyme'
import { CardImage } from '.'

describe('<CardImage/>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<CardImage/>)
    expect(wrapper.length).toEqual(1)
  })
})
