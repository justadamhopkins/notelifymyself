import React from 'react'
import { shallow } from 'enzyme'
import { CloseIcon } from '.'

describe('@CloseIcon', () => {
  it('should render a button', () => {
    const closeIcon = shallow(<CloseIcon/>)
    expect(closeIcon.length).toBe(1)
  })
  it('should render an image', () => {
    const closeIcon = shallow(<CloseIcon/>)
    expect(closeIcon.find('img').exists()).toBe(true)
  })
})
