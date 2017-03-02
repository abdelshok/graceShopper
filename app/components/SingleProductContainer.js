
import React, { Component } from 'react'
import SingleProductComponent from './SingleProductComponent'
import {connect} from 'react-redux'

const mapStateToProps = ({product}) => {
	return {
		product
	}
}


export default connect(
	mapStateToProps
	)(SingleProductComponent)



