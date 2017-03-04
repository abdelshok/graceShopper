import React, { Component } from 'react'
import {connect} from 'react-redux'
import PaymentComponent from './PaymentComponent'
import { browserHistory } from 'react-router'

const MapStateToProps = (state) => {
  const cart = state.cart
  const auth = state.auth
  return {
    cart,
    auth
  }
}

class PaymentContainer extends Component {
  constructor(props) {
    super(props)
    this.pushOrder = this.pushOrder.bind(this)
  }

  pushOrder() {
    event.preventDefault()
  }

  render () {
    return (
      <PaymentComponent {...this.props} pushOrder={this.pushOrder} />
    )
  }
}

export default connect(MapStateToProps)(PaymentContainer)
