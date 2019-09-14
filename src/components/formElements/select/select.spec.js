import React from 'react'
import { mount } from 'enzyme'
import { Select } from '.'

describe('@Select', () => {
  const props = {
    ops: ['adam'],
    label: 'my label'
  }
  it('should render the component', () => {
    const select = mount(<Select {...props}/>)
    expect(select.length).toBe(1)
  })
  it('should render options', () => {
    const select = mount(<Select {...props}/>)
    expect(select.find('select').children().length).toBe(1)
  })
  it('should render label', () => {
    const select = mount(<Select {...props}/>)
    expect(select.find('label').text()).toEqual('my label')
  })
})
