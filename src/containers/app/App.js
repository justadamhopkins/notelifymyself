import React from 'react'
import { hot } from 'react-hot-loader'
import { Layout } from '../layout'
import { Cards } from '../cards'
import { Form } from '../form'

const App = () => (
  <div>
    <Layout>
      <Form/>
      <Cards/>
    </Layout>
  </div>
)

export default hot(module)(App)
