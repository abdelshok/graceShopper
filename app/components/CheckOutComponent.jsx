import React from 'react'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'


export default function CheckOutComponent (props) {

  const style = {
        margin: 12,
      }

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
        {props.cart.productLines && props.cart.productLines.map(productLine => {
          return (<tr key={productLine.product.id}>
            <td>{productLine.product.id}</td>
            <td>{productLine.image}</td>
            <td>{productLine.product.title}</td>
            <td>{productLine.quantity}</td>
            <td>${productLine.unitCost}</td>
            <td>${productLine.totalCost}</td>
          </tr>
        )})}
        </tbody>
      </table>
      {
        props.auth ? (
          <RaisedButton label="Payment & Shipping" style={style} onClick={() => props.continue()} />
        ) : (
          <div>
             <RaisedButton label="Create an Account" style={style} onClick={() => props.createUser()} />
            <RaisedButton label="Sign In" style={style} onClick={() => props.signInUser()} />
             <RaisedButton label="Continue as Guest" style={style} onClick={() => props.continue()} />

          </div>
        )
      }
    </div>
  )
}
