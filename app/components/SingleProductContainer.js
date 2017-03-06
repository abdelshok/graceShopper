
import React, { Component } from 'react'
import SingleProductComponent from './SingleProductComponent'
import {connect} from 'react-redux'
import {addProductToCart} from '../reducers/cart'
import { browserHistory } from 'react-router'


const mapStateToProps = ({product}) => {
	return {
		product
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (productId) => {
			dispatch(addProductToCart(productId))
		}
	}
}

class SingleProductContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(productId) {
		this.props.addToCart(productId)
		browserHistory.push('/products')

	}

	render() {
		return (
			<div>
			<SingleProductComponent {...this.props} handleClick={this.handleClick} />
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(SingleProductContainer)



