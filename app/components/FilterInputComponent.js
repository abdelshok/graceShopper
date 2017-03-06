import React from 'react'

export default function FilterInputComponent (props) {
	const handleChange = props.handleChange
	const inputValue = props.inputValue
	const searchTerm = 'Enter ' + props.searchTerm
	
	return (
		<form>
		<input
		onChange={handleChange}
		value={inputValue}
		className="form-control"
		placeholder={searchTerm}
		/>
		</form>
		)
}
