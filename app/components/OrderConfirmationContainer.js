import React, { Component } from 'react'
import {connect} from 'react-redux'
import OrderComponent from './OrderComponent'



const MapStateToProps = (state) => {
  return {
    order: state.order.order
  }
}

class OrderConfirmationContainer extends Component {

  render() {

    //Put into an array, since that is the input expected by OrderComponent
    const order = [this.props.order]

    //Calculate the total cost of the order to send to the OrderComponent
    let totalCost = 0
    if (order[0]){
      order[0].productLines.forEach(line =>{
        totalCost += line.totalCost}
      )
    }

   return (
     <div>
    <h1 className="shopping-cart-header">Thank you for your order!</h1>
    <div className="checkout-thankyou-container">
    <div className="checkout-thankyou">
    {(order[0] !== undefined) && <OrderComponent orders={order} orderNumber={0} totalCost={totalCost}/>}
    </div>
    </div>
    </div>
)
}
}

export default connect(MapStateToProps)(OrderConfirmationContainer)
