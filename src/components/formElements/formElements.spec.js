import React from 'react'
import { mount } from 'enzyme'
import { FormElements } from '.'

describe('@FormElements', () => {
  const props = {
    send: jest.fn()
  }
  it('should render the component', () => {
    const formeles = mount(<FormElements {...props}/>)
    expect(formeles.length).toBe(1)
  })
  it('should render inputs', () => {
    const formeles = mount(<FormElements {...props}/>)
    expect(formeles.find('input').length).toEqual(2)
  })
  it('should render select', () => {
    const formeles = mount(<FormElements {...props}/>)
    expect(formeles.find('select').length).toEqual(1)
  })
  it('should render textarea', () => {
    const formeles = mount(<FormElements {...props}/>)
    expect(formeles.find('textarea').length).toEqual(1)
  })
  it('should render button', () => {
    const formeles = mount(<FormElements {...props}/>)
    expect(formeles.find('button').length).toEqual(1)
  })
  xit('should trigger submit function on click', () => {
    const formeles = mount(<FormElements {...props}/>)
    const { send } = props
    jest.resetAllMocks()
    formeles.find('form').simulate('submit')
    expect(send).toHaveBeenCalledTimes(1)
  })
})
