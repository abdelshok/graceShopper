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
    this.signInUserHandler = this.signInUserHandler.bind(this)
  }

  continueHandler () {
    event.preventDefault()
    browserHistory.push('/payment')
  }

  createUserHandler () {
    event.preventDefault()
    browserHistory.push('/signup')
  }

  signInUserHandler (){
    event.preventDefault()
    browserHistory.push('/login')
  }

  render() {
    return (
      <CheckOutComponent {...this.props} continue={this.continueHandler} createUser={this.createUserHandler} signInUser={this.signInUserHandler}/>
    )
  }
}

export default connect(MapStateToProps)(CheckOutContainer)
