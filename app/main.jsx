'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

import ProductListContainer from './components/ProductListContainer';
import {loadAllProducts} from './reducers/product'
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

const onProductEnter = function(nextRouterState) {
  store.dispatch(loadAllProducts())
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/productList" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/productList" component={ProductListContainer} onEnter={onProductEnter} />
        <Route path="/cart" component={ShoppingCartContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)


