import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'
import { connect } from 'react-redux'
import FilterInputComponent from './FilterInputComponent'
import { loadSelectedProduct } from '../reducers/product'
import { RadioButton } from 'material-ui/RadioButton'
import JumbotronComponent from './JumbotronComponent'

const searchBar = {
  color: 'black',
  fontSize: 30
}

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
		const inputValue = this.state.inputValue

		let filteredProducts = this.props.products.filter(product => product.artistName.toLowerCase().match(inputValue))
		if (this.state.search === 'Artist Name'){
			filteredProducts = this.props.products.filter(product => product.artistName.toLowerCase().match(inputValue))
		} else if (this.state.search === 'Title'){
			filteredProducts = this.props.products.filter(product => product.title.toLowerCase().match(inputValue))
		} else if (this.state.search === 'Color'){
			filteredProducts = this.props.products.filter(product => {
				if (inputValue !== ''){

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
			<JumbotronComponent />
			<h1 className="search-bar-title"> Search The Collection</h1>
			<div className="radio-btn-master">
				<div className="radio-btn-container">
					<div className="radio-btn">
						<RadioButton label="Artist Name" value="light" onClick={() => this.onClick('Artist Name')} />
					</div>
					<div className="radio-btn">
						<RadioButton label="Title"  value="light" onClick={() => this.onClick('Title')} />
					</div>
					<div className="radio-btn">
						<RadioButton label="Color"  value="light" onClick={() => this.onClick('Color')} />
					</div>
					<div className="radio-btn">
						<RadioButton label="Medium" value="light" onClick={() => this.onClick('Medium')} />
					</div>
				</div>
			</div>
			<FilterInputComponent handleChange={this.handleChange} inputValue={inputValue} searchTerm={this.state.search} />
			<ProductListComponent products={filteredProducts} />
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)