import React from 'react'
import { mount } from 'enzyme'
import { Form } from '.'

describe('@Form', () => {
  it('should render the component', () => {
    const form = mount(<Form/>)
    expect(form.find('.Form').exists()).toBe(true)
  })
})
