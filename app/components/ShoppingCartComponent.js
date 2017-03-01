import React from 'react'


export default function ShoppingCartComponent (props) {

	return (
		<div>
		{console.log(props)}
		<h1>Shopping Cart</h1>

		<table className="shopping-cart">
		<thead>
		<tr>
		
		<th>Product ID</th>
		<th></th>
		<th>Product</th>
		<th>Quantity</th>
		<th>Unit Cost</th>
		<th>Total Cost</th>
		</tr>
		</thead>
		<tbody>
		{props.productLines && props.productLines.map(productLine => {
			return (<tr key={productLine.id}>
			<td>{productLine.id}</td>	
			<td>{productLine.image}</td>
			<td>{productLine.title}</td>
			<td>{productLine.quantity}</td>
			<td>{productLine.unitCost}</td>
			<td>{productLine.totalCost}</td>
			<td><input type="button" value="REMOVE ITEM" /></td>
			</tr>
		)})}
		</tbody>
		</table>
		<p>{props.TotalCost}</p>
		<input type="submit" value="CHECKOUT" />
		</div>
		
	)



}