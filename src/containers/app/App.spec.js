import React from 'react'
import { shallow } from 'enzyme'
import { App } from '.'

describe('<App/>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot()
  })
})
