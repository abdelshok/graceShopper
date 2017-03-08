import React from 'react'
import {Link} from 'react-router'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'


const imageStyle = {
	height: 100,
	width: 100
}

const style = {
  width: '100%',
  margin: 20
}

export default function Order (props) {


  //Set the seletced order and the product lines in that order
  const currentOrder = props.orders[props.orderNumber]
  const productLines = currentOrder.productLines
  const totalCost = props.totalCost

  return (
    <div>
    <div>
    <Paper zDepth={4} style={style}>
     <h1 className="shopping-cart-footer">Order Details {currentOrder.updated_at.slice(0, 10)} - {currentOrder.status === 'cart' ? 'Open' : 'Completed' } - ${totalCost}</h1>
     <h2></h2>
     <Table displayRowCheckbox={false} >
    <TableHeader displaySelectAll={false}>
     <TableRow>
        <TableHeaderColumn>Image</TableHeaderColumn>
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
              <TableRowColumn><img src={product.url} style={imageStyle} /></TableRowColumn>
              <TableRowColumn>{product.artistName}</TableRowColumn>
              <TableRowColumn>{product.title}</TableRowColumn>
              <TableRowColumn>{productLine.quantity}</TableRowColumn>
              <TableRowColumn>{product.price}</TableRowColumn>
          </TableRow>
        )})}
      </TableBody>
    </Table>
  </Paper>
  </div>
    </div>
  )
}
