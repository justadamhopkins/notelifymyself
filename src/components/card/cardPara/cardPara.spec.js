import React from 'react'
import { shallow } from 'enzyme'
import { CardPara } from '.'

describe('<CardPara/>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<CardPara/>)
    expect(wrapper.length).toEqual(1)
  })
})
