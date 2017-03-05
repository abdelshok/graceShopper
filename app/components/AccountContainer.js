
import React, { Component } from 'react'
import AccountComponent from './AccountComponent'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
	return {
		user: state.account.user,
    productLines: state.account.productLines
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addToCart: (productId) => {
// 			dispatch(addProductToCart(productId))
// 		}
// 	}
// }

// class AccountContainer extends Component {

// 	constructor(props) {
// 		super(props)
// 		this.state = {}
// 	//	this.handleClick = this.handleClick.bind(this)
// 	}

// 	// handleClick(productId) {
// 	// 	this.props.addToCart(productId)
// 	// }

// 	render() {
// 		return (
// 			<div>
// 			<AccountComponent />
// 			</div>
// 		)
// 	}
// }

export default connect(mapStateToProps)(AccountComponent)



