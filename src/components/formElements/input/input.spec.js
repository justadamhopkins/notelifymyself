import React from 'react'
import { mount } from 'enzyme'
import { Input } from '.'

describe('@Input', () => {
  const props = {
    input: {
      type: 'text',
      name: 'my placeholder'
    },
    meta: {},
    label: 'my label'
  }
  it('should render a button', () => {
    const input = mount(<Input {...props}/>)
    expect(input.length).toBe(1)
  })
  it('should render placeholder', () => {
    const input = mount(<Input {...props}/>)
    expect(input.find('input').prop('placeholder')).toEqual('my placeholder')
  })
  it('should render label', () => {
    const input = mount(<Input {...props}/>)
    expect(input.find('label').text()).toEqual('my label')
  })
})
