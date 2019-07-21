import React from 'react'
import { shallow } from 'enzyme'
import { CardTitle } from '.'

describe('<Card/>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<CardTitle/>)
    expect(wrapper.length).toEqual(1)
  })
})
