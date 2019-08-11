import React from 'react'
import { hot } from 'react-hot-loader'
import { Layout } from '../layout'
import { Cards } from '../cards'
import { Form } from '../form'
import Fetch from '../fetch'

const App = () => (
  <div>
    <Layout>
      <Form/>
      <Cards/>
      <Fetch/>
    </Layout>
  </div>
)

export default hot(module)(App)
