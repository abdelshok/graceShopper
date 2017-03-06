import React, { Component } from 'react'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import OrderComponent from './OrderComponent'


const MapStateToProps = (state) => {
  return {
    user: state.account.user,
    productLines: state.account.productLines
  }
}

class OrderConfirmationContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      orderNumber: -1,
    }
    this.handleClick = this.handleClick.bind(this)
  }

//Selects which order details to display
  handleClick = function(row) {
    //Only will change the state if the click is inside a valid row
    if (row.length) {
      this.setState({orderNumber: row})
    }
}

  render() {


    const orders = this.props.productLines

   //Gives each order a totalCost key and value from the ProductLines table
   orders.forEach(order =>{
    let totalCost = 0
    order.productLines.forEach(productLine => {
        totalCost += productLine.totalCost
    })
    order.totalCost = totalCost
  })

   return (
  <div >
  <Paper zDepth={4}>
  <h1>Thank You For Your Order!</h1>
</Paper>
</div>
)
}
}

export default connect(MapStateToProps)(OrderConfirmationContainer)
