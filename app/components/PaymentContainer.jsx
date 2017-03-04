import React, { Component } from 'react'
import {connect} from 'react-redux'
import PaymentComponent from './PaymentComponent'
import { browserHistory } from 'react-router'
import { convertCartToOrder } from '../reducers/cart'


const MapStateToProps = (state) => {
  const cart = state.cart
  const auth = state.auth
  return {
    cart,
    auth
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    pushCartToOrder: (cartId) => {
      dispatch(convertCartToOrder(cartId))
    }
  }
}

class PaymentContainer extends Component {
  constructor(props) {
    super(props)
    this.pushOrder = this.pushOrder.bind(this)
  }

  pushOrder() {
    event.preventDefault()
    this.props.pushCartToOrder(this.props.cart.id)
  }

  render () {
    return (
      <PaymentComponent {...this.props} pushOrder={this.pushOrder} />
    )
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(PaymentContainer)
