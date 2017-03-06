import React from 'react'
import {Link} from 'react-router'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'

export default function Order (props) {


  //Set the seletced order and the product lines in that order
  const currentOrder = props.orders[props.orderNumber]
  const productLines = currentOrder.productLines


  return (
    <div>
    <Paper zDepth={4}>
     <h3>Order Details {currentOrder.updated_at.slice(0, 10)} - {currentOrder.status === 'cart' ? 'Open' : 'Completed' }</h3>
     <h2></h2>
     <Table displayRowCheckbox={false} >
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Artist</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Quantity</TableHeaderColumn>
        <TableHeaderColumn>Cost</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    {productLines && productLines.map(productLine => {
        let product = productLine.product
          return (<TableRow key={productLine.id}>
              <TableRowColumn>{product.artistName}</TableRowColumn>
              <TableRowColumn>{product.title}</TableRowColumn>
              <TableRowColumn>{product.quantity}</TableRowColumn>
              <TableRowColumn>{product.price }</TableRowColumn>
          </TableRow>
        )})}
      </TableBody>
    </Table>
  </Paper>
    </div>
  )
}
