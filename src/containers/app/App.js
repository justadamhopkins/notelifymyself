import React from 'react'
import { hot } from 'react-hot-loader'
import { Router } from '@reach/router'
import { Layout } from '../layout'
import { Cards } from '../cards'
import { Form } from '../form'

const App = () => {
  return (
    <div>
      <Layout>
        <Router>
            <Form path="/category/:categoryId" />
            <Cards path="/category/:categoryId"/>
        </Router>
      </Layout>
    </div>
  )
}


export default hot(module)(App)
