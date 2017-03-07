import React from 'react'

export default function FilterInputComponent (props) {
	const handleChange = props.handleChange
	const inputValue = props.inputValue
	const searchTerm = 'Enter ' + props.searchTerm
	const searchBarStyle = {marginLeft: 20, marginRight: 40 }

	return (
		<form>
		<input
		style={searchBarStyle} 
		onChange={handleChange}
		value={inputValue}
		className="form-control"
		placeholder={searchTerm}
		/>
		</form>
		)
}
