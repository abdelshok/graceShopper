import React, { Component } from 'react'
import {connect} from 'react-redux'
import CheckOutComponent from './CheckOutComponent'
import { browserHistory } from 'react-router'

const MapStateToProps = (state) => {
  const cart = state.cart
  const auth = state.auth
  return {
    cart,
    auth
  }
}

class CheckOutContainer extends Component {
  constructor(props) {
    super(props)
    this.continueHandler = this.continueHandler.bind(this)
    this.createUserHandler = this.createUserHandler.bind(this)
  }

  continueHandler () {
    event.preventDefault()
    browserHistory.push('/payment')
  }

  createUserHandler () {
    event.preventDefault()
  }

  render() {
    return (
      <div>
      <CheckOutComponent {...this.props} continue={this.continueHandler} createUser={this.createUserHandler}/>
      <h3>Total Cost: ${this.props.cart.productLines && this.props.cart.productLines.reduce(function(acc, val) {
              return acc + val.totalCost;
            }, 0)}</h3>
      </div>
    )
  }
}

export default connect(MapStateToProps)(CheckOutContainer)
