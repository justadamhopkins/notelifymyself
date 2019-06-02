import React from 'react'
import { hot } from 'react-hot-loader'
import { Layout } from '../layout'
import Fetch from '../fetch'

const App = () => (
  <div className='test'>
    <Layout/>
    <Fetch/>
  </div>
)

export default hot(module)(App)
