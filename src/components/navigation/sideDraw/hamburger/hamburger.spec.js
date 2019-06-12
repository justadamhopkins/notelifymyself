import React from 'react'
import { shallow } from 'enzyme'
import { Hamburger } from '.'

describe('@Hamburger', () => {
  it('should render the component', () => {
    const hamburger = shallow(<Hamburger isVisible={false}/>)
    expect(hamburger.length).toBe(1)
  })
})
