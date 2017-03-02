import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'
import {connect} from 'react-redux'
import FilterInputComponent from './FilterInputComponent'
import {loadSelectedProduct} from '../reducers/product'



const mapStateToProps = ({products}) => {
  console.log("IN MAP TO STATE")
	return {
		products
	}
}

const mapDispatchToProps = (dispatch) => ({
		onToClick() {
			console.log('yeahhhh')
		},
		productSearch(title) {
			console.log('about to dispatch', title)
			dispatch(loadSelectedProduct(title))
		}
})

class ProductListContainer extends Component {

	constructor(props) {
		super(props)
		this.state = { inputValue: '' }
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(evt) {
		evt.preventDefault();
		console.log('yeah')
	}

	handleChange(evt) {
		console.log(evt.target.value, 'this is the event')
	    this.setState({
	      inputValue: evt.target.value
	    });
  	}

	render() {
	   const inputValue = this.state.inputValue;
	   var filteredProducts = this.props.products.filter(product => product.artistName.match(inputValue))
		return (
			<div> 
			<h1> Search Bar </h1>
			<FilterInputComponent handleChange={this.handleChange} />
			<ProductListComponent products={filteredProducts} handleSubmit={this.handleSubmit} inputValue={inputValue} />
			</div>

		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)


		
