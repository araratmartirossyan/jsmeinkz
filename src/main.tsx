import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { client } from './graphql'

import './index.css'
import { Home } from './pages/Home/Home'
import { Job } from './pages/Job/Job'

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/job/:id">
            <Job />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)
