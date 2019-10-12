import React from 'react'
import { hot } from 'react-hot-loader'
import { Router } from '@reach/router'
import { Layout } from '../layout'
import { Home } from '../home'
import { Cards } from '../cards'
import { Form } from '../form'

const App = () => {
  return (
    <div>
      <Layout>
        <Router>
            <Home path="/" />
            <Form path="/category/:categoryId" />
        </Router>
        <Cards/>
      </Layout>
    </div>
  )
}


export default hot(module)(App)
