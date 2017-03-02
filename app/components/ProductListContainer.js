import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'
import {connect} from 'react-redux'
import SearchBarComponent from './SearchBarComponent'
import {loadSelectedProduct} from '../reducers/product'



const mapStateToProps = ({products}) => {
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
		this.state = {}
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(evt) {
		evt.preventDefault();
		console.log('yeah')
	}

	handleChange(evt) {
		evt.preventDefault()
		const title = evt.target.value
		this.setState({title})
		console.log(this.state, 'logging the state')
		if (this.state.title) {
		this.props.productSearch(this.state)
		}
	}

	render() {
		return (
			<div> 
			<h1> Search Bar </h1>
			<SearchBarComponent handleChange={this.handleChange} />
			<ProductListComponent {...this.props} handleSubmit={this.handleSubmit} />
			</div>

		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)


		
