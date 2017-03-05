import React from 'react'

export default function SignUpPageComponent (props) {
	const nameHandleChange = props.nameHandleChange
	const emailHandleChange = props.emailHandleChange
	const passwordHandleChange = props.passwordHandleChange
	const confirmationPassChange = props.confirmationPassChange
	const handleSubmit = props.handleSubmit

	return (
		<form onSubmit={handleSubmit} > 
		<label> 
		Name
		<input type="text" placeholder="Name" onChange={nameHandleChange} />
		</label>

		<label>
		Email:
		<input type="text" placeholder="email" onChange={emailHandleChange} />
		</label>

		<label>
		Password:
		<input type="text" placeholder="password" onChange={passwordHandleChange} />
		</label>

		<label>
		Type password again:
		<input type="text" placeholder="password" onChange={confirmationPassChange} />
		</label>
	
		<input type="submit" value="Submit" /> 

		</form>
		)

}


