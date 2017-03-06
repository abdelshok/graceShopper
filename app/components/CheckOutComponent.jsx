import React from 'react'
import {Link} from 'react-router'


export default function CheckOutComponent (props) {
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
          <input type="submit" value="Payment & Shipping" onClick={() => props.continue()} />
        ) : (
          <div>
            <Link to='/signUp'>
            <input type="submit" value="Create an Account" onClick={() => props.createUser()} />
            </Link>
            <input type="submit" value="Continue as Guest" onClick={() => props.continue()} />
          </div>
        )
      }
    </div>
  )
}
