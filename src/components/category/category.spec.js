import React from 'react'
import { mount } from 'enzyme'
import { Category } from '.'

describe('<Category/>', () => {
  const props = {
    addCategory: jest.fn()
  }
  it('Should render component', () => {
    const category = mount(<Category {...props} />)
    expect(category.length).toEqual(1)
  })
  it('should render the add category button', () => {
    const category = mount(<Category {...props} />)
    expect(category.find('button').length).toEqual(1)
  })
})
