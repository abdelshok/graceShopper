import React, { Component } from 'react'
import {connect} from 'react-redux'

export default function SearchBarComponent (props) {


		// the input calls the handler function on Change
		const handleChange = props.handleChange

		return ( 
			<input type="text" onChange={handleChange}  /> 
		)
	}








