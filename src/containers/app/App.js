import React from 'react'
import { hot } from 'react-hot-loader'
import { Layout } from '../layout'
import { Cards } from '../cards'
import Fetch from '../fetch'

const App = () => (
  <div>
    <Layout>
      <Cards/>
      <Fetch/>
    </Layout>
  </div>
)

export default hot(module)(App)
