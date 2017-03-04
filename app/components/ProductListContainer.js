import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'
import {connect} from 'react-redux'
import FilterInputComponent from './FilterInputComponent'
import {loadSelectedProduct} from '../reducers/product'


const mapStateToProps = ({products}) => {
	return {
		products
	}
}

const mapDispatchToProps = (dispatch) => ({
		onToClick() {
		throw Error('to do')
		},
		productSearch(title) {
		dispatch(loadSelectedProduct(title))
		}
})

class ProductListContainer extends Component {

	constructor(props) {
		super(props)
		this.state = { inputValue: '' }
	    this.handleChange = this.handleChange.bind(this)
	}


	handleChange(evt) {
	    this.setState({
	      inputValue: evt.target.value
	    })}

	render() {
	   const inputValue = this.state.inputValue
	   var filteredProducts = this.props.products.filter(product => product.artistName.toLowerCase().match(inputValue))
		return (
			<div>
			<h1> Search Bar </h1>
			<FilterInputComponent handleChange={this.handleChange} inputValue={inputValue} />
			<ProductListComponent products={filteredProducts}/>
			</div>

		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
