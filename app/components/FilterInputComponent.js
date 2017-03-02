import React, { Component } from 'react'
import {connect} from 'react-redux'

export default function FilterInputComponent (props) {


		  const handleChange = props.handleChange;
  		  const inputValue = props.inputValue;

		  return (
		    <form>
		      <input
		        onChange={handleChange}
		        inputValue={inputValue}
		        className='form-control'
		        placeholder="Enter Painting Title"
		      />
		    </form>
		  )
	}






