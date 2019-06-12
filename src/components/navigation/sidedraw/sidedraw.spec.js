import React from 'react'
import { shallow } from 'enzyme'
import { Sidedraw } from '.'

describe('@Sidedraw', () => {
  it('should render the component', () => {
    const sidebar = shallow(<Sidedraw isVisible={false}/>)
    expect(sidebar.length).toBe(1)
  })
})
