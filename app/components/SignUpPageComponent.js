import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default function SignUpPageComponent (props) {
	const nameHandleChange = props.nameHandleChange
	const emailHandleChange = props.emailHandleChange
	const passwordHandleChange = props.passwordHandleChange
	const confirmationPassChange = props.confirmationPassChange
	const handleSubmit = props.handleSubmit

	const buttonStyle = {
		  margin: 20,
		  borderColor: 'white'
		}

	return (
		<form>
		<div className='form-element'>
		<input type="text" placeholder="Name" onChange={nameHandleChange} />
		</div>

		<div className='form-element'>
		<input type="text" placeholder="Email" onChange={emailHandleChange} />
		</div>

		<div className='form-element'>
		<input type="text" placeholder="Password" onChange={passwordHandleChange} />
		</div>

		<div className='form-element'>
		<input type="text" placeholder="Re-Type Password" onChange={confirmationPassChange} />
		</div>
		<div>
		<RaisedButton label="Submit" style={buttonStyle} onClick={handleSubmit} /> </div>
		</form>
		)

}


