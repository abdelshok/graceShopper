import React from 'react'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

export default function CheckOutComponent (props) {

  const style = {
    width: '100%',
    margin: 12,
}

  const imageStyle = {
  	height: 100,
	  width: 100
}

const btnStyle = {
  margin: 12
}

  return (
    <div>
    <div className="checkout-component">
      <Paper zDepth={4} style={style}>
      <h1 className="shopping-cart-header">Order Confirmation</h1>
      <Table displayRowCheckbox={false}>
          <TableHeader displaySelectAll={false}>
          <TableRow>
          <TableHeaderColumn>Product ID</TableHeaderColumn>
          <TableHeaderColumn>Product</TableHeaderColumn>
          <TableHeaderColumn>Qty</TableHeaderColumn>
          <TableHeaderColumn>Unit</TableHeaderColumn>
          <TableHeaderColumn>Total</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {props.cart.productLines && props.cart.productLines.map(productLine => {
          return (<TableRow key={productLine.product.id}>
            <TableRowColumn>{productLine.product.id}</TableRowColumn>
            <TableRowColumn>{productLine.product.title}</TableRowColumn>
            <TableRowColumn>{productLine.quantity}</TableRowColumn>
            <TableRowColumn>${productLine.unitCost}</TableRowColumn>
            <TableRowColumn>${productLine.totalCost}</TableRowColumn>
          </TableRow>
        )})}
        </TableBody>
      </Table>
      </Paper>
      {
        props.auth ? (
          <RaisedButton label="Payment & Shipping" style={btnStyle} onClick={() => props.continue()} />
        ) : (
          <div>
             <RaisedButton label="Create an Account" style={btnStyle} onClick={() => props.createUser()} />
            <RaisedButton label="Log In" style={btnStyle} onClick={() => props.signInUser()} />
             <RaisedButton label="Continue as Guest" style={btnStyle} onClick={() => props.continue()} />

          </div>
        )
      }
    </div>  
    </div>
  )
}
