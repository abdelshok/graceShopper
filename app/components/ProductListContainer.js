import React, { Component } from 'react'
import ProductListComponent from './ProductListComponent'
import {connect} from 'react-redux'

const mapStateToProps = ({products}) => {
	return {
		products
	}
}


export default connect(
	mapStateToProps
	)(ProductListComponent)



