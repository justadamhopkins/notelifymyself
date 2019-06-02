import React from 'react'
import { shallow } from 'enzyme'
import { Layout } from '.'

describe('<Layout/>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<Layout/>)
    expect(wrapper).toMatchSnapshot()
  })
})
