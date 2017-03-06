import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'
import {connect} from 'react-redux'
import FilterInputComponent from './FilterInputComponent'
import {loadSelectedProduct} from '../reducers/product'
import Checkbox from 'material-ui/Checkbox'

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
	    this.onCheck = this.onCheck.bind(this)
}


	handleChange (evt) {
	    this.setState({
	      inputValue: evt.target.value
	    })
	}

	onCheck (filter) {
		this.setState({
		search: filter
		})
	}

	render() {
		const styles = { block: { maxWidth: 250 }, checkbox: { marginBottom: 16 } }
		const inputValue = this.state.inputValue

		let filteredProducts = this.props.products.filter(product => product.artistName.toLowerCase().match(inputValue))
			if (this.state.search === 'Artist Name'){
				filteredProducts = this.props.products.filter(product => product.artistName.toLowerCase().match(inputValue))
			} else if (this.state.search === 'Title'){
				filteredProducts = this.props.products.filter(product => product.title.toLowerCase().match(inputValue))
			} else if (this.state.search === 'Color'){
				filteredProducts = this.props.products.filter(product => {
					if (inputValue !== ''){
						product.tags.includes(inputValue)
					}
				})
			} else if (this.state.search === 'Medium'){
				filteredProducts = this.props.products.filter(product => {product.medium.toLowerCase().match(inputValue)})
			}

		return (
			<div>
				<h1> Search The Collection</h1>
				{console.log('STATE:', this.state)}
				{console.log('FILTER:', filteredProducts)}
					<div style={styles.block}>
					<Checkbox label="Artist Name" style={styles.checkbox} onCheck={() => this.onCheck('Artist Name')} />
					</div>
					<div style={styles.block}>
					<Checkbox label="Title" style={styles.checkbox} onCheck={() => this.onCheck('Title')} />
					</div>
					<div style={styles.block}>
					<Checkbox label="Color" style={styles.checkbox} onCheck={() => this.onCheck('Color')} />
					</div>
					<div style={styles.block}>
					<Checkbox label="Medium" style={styles.checkbox} onCheck={() => this.onCheck('Medium')} />
					</div>
				<FilterInputComponent handleChange={this.handleChange} inputValue={inputValue} searchTerm={this.state.search} />
				<ProductListComponent products={filteredProducts} />
			</div>

		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
