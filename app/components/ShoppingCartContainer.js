import React, { Component } from 'react'
import ShoppingCartComponent from './ShoppingCartComponent'

const MapStateToProps = (state) => {
	const productLines = state.productLines
}

const MapDispatchToProps



export default class ShoppingCartContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			
		}}
	


	render() {
		if (this.props.productLines) {
			return (
				<div>
					<ShoppingCartComponent productLines={this.state.productLines} />
				</div>
			)
		} else {
			return (
				<div><h1>Your Cart Is Empty!</h1></div>
				)
		}
	}


}