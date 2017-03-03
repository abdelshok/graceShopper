import React from 'react'


export default function ShoppingCartComponent (props) {
	return (
		<div>

		<h1>Shopping Cart</h1>

		<table className="shopping-cart">
		<thead>
		<tr>
		<th>Product ID</th>
		<th />
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
			<td>${productLine.unitCost}</td>
			<td>${productLine.totalCost}</td>
			<td><input type="button" value="REMOVE ITEM" onClick={() => props.onClick(productLine.id)} /></td>
			</tr>
		)})}
		</tbody>
		</table>
		</div>

	)
}
