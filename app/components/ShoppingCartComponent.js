import React from 'react'
import {Link} from 'react-router'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';

export default function ShoppingCartComponent (props) {
  const divStyle = {

  }

  const imageStyle = {
    height: 100,
    width: 100
  }

	return (
		<div>
    <Paper zDepth={4} style={divStyle}>
		<h1 className="shopping-cart-header">Shopping Cart</h1>
    <Table displayRowCheckbox={false} >
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Product</TableHeaderColumn>
        <TableHeaderColumn>Artist</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>price</TableHeaderColumn>
        <TableHeaderColumn>Quantity</TableHeaderColumn>
        <TableHeaderColumn>Total</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
    {props.productLines && props.productLines.map(productLine => {
			return (<TableRow key={productLine.id}>
				<TableRowColumn><img src={productLine.product.url} style={imageStyle}/></TableRowColumn>
				<TableRowColumn>{productLine.product.artistName}</TableRowColumn>
				<TableRowColumn>{productLine.product.title}</TableRowColumn>
        <TableRowColumn>${productLine.product.price}</TableRowColumn>
				<TableRowColumn>{productLine.quantity}</TableRowColumn>
				<TableRowColumn>${productLine.totalCost}</TableRowColumn>
				<TableRowColumn><RaisedButton label="REMOVE ITEM"  onClick={() => props.onClick(productLine.id)} /></TableRowColumn>
				</TableRow>
				)})}
        </TableBody>
    </Table>
    </Paper>

		</div>
		)
}
