import React from 'react'
import { shallow } from 'enzyme'
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
  it('should render the component', () => {
    const input = shallow(<Input {...props}/>)
    expect(input.length).toBe(1)
  })
  it('should render placeholder', () => {
    const input = shallow(<Input {...props}/>)
    expect(input.find('input').prop('placeholder')).toEqual('my placeholder')
  })
  it('should render label', () => {
    const input = shallow(<Input {...props}/>)
    expect(input.find('label').text()).toEqual('my label')
  })
})
