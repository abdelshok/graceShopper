'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import itemListContainer from './components/itemListContainer'
import ShoppingCartContainer from './components/ShoppingCartContainer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI /> : <Login />}
      </nav>
      {children}
    </div>
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/itemList" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/itemList" component={itemListContainer} />
        <Route path="/cart" component={ShoppingCartContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
