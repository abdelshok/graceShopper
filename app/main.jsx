'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

//imports for Material UI config
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from './store'
import AppCont from './components/AppContainer'
import ProductListContainer from './components/ProductListContainer';
import {loadAllProducts} from './reducers/product'
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

const AppRoutes = (
  <Route path="/" component={ExampleApp}>
    <Route path="/productList" component={ProductListContainer} onEnter={onProductEnter} />
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


