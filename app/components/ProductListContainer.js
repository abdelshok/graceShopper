import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'
import {connect} from 'react-redux'
import FilterInputComponent from './FilterInputComponent'
import {loadSelectedProduct} from '../reducers/product'
import { RadioButton } from 'material-ui/RadioButton'






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
		this.state = { 
			inputValue: '',
			search: 'Artist Name'
		}
		this.handleChange = this.handleChange.bind(this)
		this.onClick = this.onClick.bind(this)
	}


	handleChange (evt) {
		this.setState({
			inputValue: evt.target.value
		})
	}

	onClick (filter) {
		this.setState({
			inputValue: '',
			search: filter
		})
	}

	render() {
		const searchStyles = { display: 'inline-block' }
		const inputValue = this.state.inputValue
		const displayStyle = { display: 'inline-block', marginTop: 20, marginLeft: 20}
		const barStyle = { color: '#606060', fontSize: 30, marginLeft: 20 }

		let filteredProducts = this.props.products.filter(product => product.artistName.toLowerCase().match(inputValue))
		if (this.state.search === 'Artist Name'){
			filteredProducts = this.props.products.filter(product => product.artistName.toLowerCase().match(inputValue))
		} else if (this.state.search === 'Title'){
			filteredProducts = this.props.products.filter(product => product.title.toLowerCase().match(inputValue))
		} else if (this.state.search === 'Color'){
			filteredProducts = this.props.products.filter(product => {
				if (inputValue !== ''){
					console.log(product.tags.map(tags => tags.toLowerCase()), 'these are tags')
					return product.tags.map(tags => tags.toLowerCase()).includes(inputValue)				
				}
				else {
					return filteredProducts = this.props.products.filter(product => product.title.toLowerCase().match(inputValue))
				}
			})
		} else if (this.state.search === 'Medium'){
			filteredProducts = this.props.products.filter(product =>  product.medium.toLowerCase().match(inputValue))
		}
		return (
			<div>
			<h1 style={barStyle} > Browse </h1>

			<FilterInputComponent handleChange={this.handleChange} inputValue={inputValue} searchTerm={this.state.search} />
			<div style={displayStyle} >
			<RadioButton label="Artist Name" style={searchStyles} onClick={() => this.onClick('Artist Name')} />
			<RadioButton label="Title" style={searchStyles} onClick={() => this.onClick('Title')} />
			<RadioButton label="Color" style={searchStyles} onClick={() => this.onClick('Color')} />
			<RadioButton label="Medium" style={searchStyles} onClick={() => this.onClick('Medium')} />
			</div>
			<ProductListComponent products={filteredProducts} />
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
