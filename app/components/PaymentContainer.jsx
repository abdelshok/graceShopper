import React, { Component } from 'react'
import {connect} from 'react-redux'
import PaymentComponent from './PaymentComponent'
import { browserHistory } from 'react-router'
import { convertCartToOrderAuth } from '../reducers/cart'
import { convertCartToOrderGuest } from '../reducers/cart'


const MapStateToProps = (state) => {
  const cart = state.cart
  const auth = state.auth
  const guest = state.guest
  return {
    cart,
    auth,
    guest
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
    pushCartToOrderAuth: (cartId) => {
      dispatch(convertCartToOrderAuth(cartId))
    },
    pushCartToOrderGuest: (cart) =>{
      dispatch(convertCartToOrderGuest(cart))
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
    if (this.props.auth !== ''){
      this.props.pushCartToOrderAuth(this.props.cart.id)
    } else {
      this.props.pushCartToOrderGuest(this.props.cart)
    }

  }

  render () {
    return (
      <PaymentComponent {...this.props} pushOrder={this.pushOrder} />
    )
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(PaymentContainer)
