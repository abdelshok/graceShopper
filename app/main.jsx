'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

//imports for Material UI config
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import ProductListContainer from './components/ProductListContainer'
import SingleProductContainer from './components/SingleProductContainer'

import store from './store'
import AppCont from './components/AppContainer'

import {loadAllProducts} from './reducers/product'
import {loadSingleProduct} from './reducers/singleProduct'
import ShoppingCartContainer from './components/ShoppingCartContainer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <AppCont />
      {children}
    </div>
)

const onProductEnter = function(nextRouterState) {
  store.dispatch(loadAllProducts())
}

const onSingleProductEnter = function(nextRouterState) {
  const productId = nextRouterState.params.productId
  store.dispatch(loadSingleProduct(productId))
}

const AppRoutes = (
  <Route path="/" component={ExampleApp}>
    <Route path="/products" component={ProductListContainer} onEnter={onProductEnter} />
    <Route path="/products/:productId" component={SingleProductContainer} onEnter={onSingleProductEnter} />
    <Route path="/cart" component={ShoppingCartContainer} />
  </Route>
)

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory} routes={AppRoutes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)

