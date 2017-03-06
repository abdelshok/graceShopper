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
    pushCartToOrderAuth: (cartId, details) => {
      dispatch(convertCartToOrderAuth(cartId, details))
    },
    pushCartToOrderGuest: (cart, details) =>{
      dispatch(convertCartToOrderGuest(cart, details))
    }
  }
}

class PaymentContainer extends Component {
  constructor(props) {
    super(props)
    this.pushOrder = this.pushOrder.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.details = {
       name: '',
       email: '',
       adress1: '',
       adress2: '',
       city: '',
       state: '',
       zip: '',
       cardName: '',
       cardNumber: '',
       cardExpiration: '',
       cardCvc: '',
       cardZip: ''
    }
  }

  handleChange(event) {
    event.preventDefault()
    this.details[event.target.id] = event.target.value
  }

  pushOrder() {
    event.preventDefault()
    if (this.props.auth !== ''){
      this.props.pushCartToOrderAuth(this.props.cart.id, this.details)
    } else {
      this.props.pushCartToOrderGuest(this.props.cart, this.details)
    }

  }

  render () {
    return (
      <PaymentComponent {...this.props} pushOrder={this.pushOrder} handleChange={this.handleChange}/>
    )
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(PaymentContainer)
