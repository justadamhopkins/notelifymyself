import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '.'

describe('<Header/>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
  })
})
