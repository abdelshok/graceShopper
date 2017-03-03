import React, { Component } from 'react'
import {connect} from 'react-redux'

const MapStateToProps = (state) => {
  const cart = state.cart
  return {
    cart
  }
}

class CheckOutContainer extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h1>Order Confirmation</h1>
        <table className="shopping-ckeckout">
        <thead>
        <tr>
        <th>Product ID</th>
        <th />
        <th>Product</th>
        <th>Qty</th>
        <th>Unit</th>
        <th>Total</th>
        </tr>
        </thead>
        <tbody>
        {this.props.cart.productLines && this.props.cart.productLines.map(productLine => {
          return (<tr key={productLine.product.id}>
          <td>{productLine.id}</td>
          <td>{productLine.image}</td>
          <td>{productLine.product.title}</td>
          <td>{productLine.quantity}</td>
          <td>${productLine.unitCost}</td>
          <td>${productLine.totalCost}</td>
          </tr>
        )})}
        </tbody>
        </table>
        <h3>Order Total Cost: ${this.props.cart.totalCost}</h3>
        <h2>Payment info:</h2>
        <p>Credit Card</p>
        <input type="text" value="Type here"/><br/><br/>
        <input type="text" value="Type here"/><br/><br/>
        <input type="text" value="Type here"/><br/><br/>
        <input type="text" value="Type here"/><br/><br/><br/>
        <input type="submit" value="PROCESS PAYMENT" />
      </div>
    )
  }
}

export default connect(MapStateToProps)(CheckOutContainer)
