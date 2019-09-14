import React from 'react'
import { mount } from 'enzyme'
import { FormElements } from '.'

describe('@FormElements', () => {
  it('should render the component', () => {
    const formeles = mount(<FormElements/>)
    expect(formeles.length).toBe(1)
  })
  it('should render inputs', () => {
    const formeles = mount(<FormElements/>)
    expect(formeles.find('input').length).toEqual(2)
  })
  it('should render select', () => {
    const formeles = mount(<FormElements/>)
    expect(formeles.find('select').length).toEqual(1)
  })
  it('should render textarea', () => {
    const formeles = mount(<FormElements/>)
    expect(formeles.find('textarea').length).toEqual(1)
  })
  it('should render button', () => {
    const formeles = mount(<FormElements/>)
    expect(formeles.find('button').length).toEqual(1)
  })
})
