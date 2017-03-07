import React from 'react'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

export default function CheckOutComponent (props) {

  const style = {
    width: 800,
    margin: 12,
}

  const imageStyle = {
  	height: 100,
	  width: 100
}

  return (
    <div>
      <Paper zDepth={4} style={style}>
      <h3>Order Confirmation</h3>
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
          <RaisedButton label="Payment & Shipping" style={style} onClick={() => props.continue()} />
        ) : (
          <div>
             <RaisedButton label="Create an Account" style={style} onClick={() => props.createUser()} />
            <RaisedButton label="Log In" style={style} onClick={() => props.signInUser()} />
             <RaisedButton label="Continue as Guest" style={style} onClick={() => props.continue()} />

          </div>
        )
      }
    </div>
  )
}
