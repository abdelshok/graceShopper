import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'
import {connect} from 'react-redux'

const mapStateToProps = ({products}) => {
	console.log(products, 'hey')

	return {
		products
	}
}


// class ProductListContainer extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {products: []}

// 	}

// 	render() {
// 		console.log(this.state, 'state')
// 		return(
// 			<div>
// 				<ProductListComponent products={this.state.products} />
//  			</div>	
// 		)
// 	}

// }



export default connect(
	mapStateToProps
	)(ProductListComponent)



