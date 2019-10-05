import React from 'react'
import { mount } from 'enzyme'
import * as cardActions from '../../store/actions/card/cardActions.js'
import { Form } from './form'

jest.mock('../../store/actions/card/cardActions')

describe('@Form', () => {
  const OLD_ENV = process.env
  beforeEach(() => {
    jest.clearAllMocks()
    process.env = { ...OLD_ENV }
    cardActions.addCard.mockReturnValue('hello')
  })
  it('should render the component', () => {
    const form = mount(<Form/>)
    expect(form.find('.Form').exists()).toBe(true)
  })
  xit('should call the addCard endpoint on form submit', async () => {
    process.env.baseUrl = 'http://localhost:3001/api'
    const values = { pictures: 'animals' }
    const mockSuccessResponse = { title: 'Mr', subtitle: 'Adam' }
    const mockJsonPromise = Promise.resolve(mockSuccessResponse) // 2
    const mockFetchPromise = Promise.resolve({ // 3
      json: () => mockJsonPromise
    })
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise)
    const form = mount(<Form/>)
    form.find('form').simulate('submit')
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith(process.env.baseUrl + '/addCard', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    global.fetch.mockClear()
    delete global.fetch
  })
})
