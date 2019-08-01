import React from 'react'
import { mount } from 'enzyme'
import { Wrapper } from '.'

describe('<Wrapper/>', () => {
  it('Should render component', () => {
    const wrapper = mount(<Wrapper/>)
    expect(wrapper).toMatchSnapshot()
  })
})
