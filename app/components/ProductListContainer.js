import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'
import {connect} from 'react-redux'
import FilterInputComponent from './FilterInputComponent'
import {loadSelectedProduct} from '../reducers/product'
import { RadioButton } from 'material-ui/RadioButton'
import JumbotronContainer from './JumbotronContainer'


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
		const styles = { block: { maxWidth: 250 }, checkbox: { marginBottom: 16 } }
		const inputValue = this.state.inputValue
		const displayStyle = { display: 'inline'}

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
			<JumbotronContainer />
			<h1 className="search-bar-title"> Search The Collection</h1>
			<div className="radio-btn-master">
			<div className="radio-btn-container">
			<div className="radio-btn">
			<RadioButton label="Artist Name" style={displayStyle} onClick={() => this.onClick('Artist Name')} />
			</div>
			<div className="radio-btn">
			<RadioButton label="Title" style={displayStyle} onClick={() => this.onClick('Title')} />
			</div>
			<div className="radio-btn">
			<RadioButton label="Color" style={displayStyle} onClick={() => this.onClick('Color')} />
			</div>
			<div className="radio-btn">
			<RadioButton label="Medium" style={displayStyle} onClick={() => this.onClick('Medium')} />
			</div>
			</div>
			</div>
			<FilterInputComponent handleChange={this.handleChange} inputValue={inputValue} searchTerm={this.state.search} style={searchBar} />
			<ProductListComponent products={filteredProducts} />
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer)
