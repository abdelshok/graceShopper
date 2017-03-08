import React, { Component } from 'react'
import {connect} from 'react-redux'
import SignUpPageComponent from './SignUpPageComponent'
import {createUser} from '../reducers/user'
import {browserHistory} from 'react-router'


const mapStateToProps = (state) => {
	const newUserCreated = state.user.newUserCreated
	const userExists = state.user.userExists
	return {
		newUserCreated,
		userExists
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createNewUser: (newUser) => {
			dispatch(createUser(newUser))
		}
	}
}

class SignInPageContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			passwordMismatch: false,
			message: ''
		}
		this.nameHandleChange = this.nameHandleChange.bind(this)
		this.emailHandleChange = this.emailHandleChange.bind(this)
		this.passwordHandleChange = this.passwordHandleChange.bind(this)
		this.confirmationPassChange = this.confirmationPassChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	nameHandleChange(evt) {
		this.setState({
			name: evt.target.value
		})
	}

	emailHandleChange(evt) {
		this.setState({
			email: evt.target.value
		})
	}

	passwordHandleChange(evt) {
		this.setState({
			password: evt.target.value
		})
	}

	confirmationPassChange(evt) {
		this.setState({
			password2: evt.target.value
		})	
	}

	handleSubmit(evt) {
		evt.preventDefault()
		if (this.state.password !== this.state.password2) {
			 this.setState({message: "Passwords don't match"})
		} else if (this.state.password === this.state.password2 && this.state.password.length < 6) {
			this.setState({message: "Password needs to be longer than 6 characters"})
		} else if (this.state.password === this.state.password2 && this.state.password !== "" && this.state.password.length >= 6) {
				this.setState({
				name: '',
				email: '',
				password: '',
				password2: '',
				passwordMismatch: false,
				message: ''})
			this.props.createNewUser(this.state)
			browserHistory.goBack()
			}
		}


	render() {

		const userExists = this.props.userExists
		let userMessage = ''

		if (userExists) {
			userMessage = <h5> User already exists </h5>
		}

		return (
			<div>
				<div className="sign-up-form">
					<h1 className="sign-up-title"> Sign Up </h1>
						<SignUpPageComponent
							nameHandleChange={this.nameHandleChange} 
							passwordHandleChange={this.passwordHandleChange}
							emailHandleChange={this.emailHandleChange}
							confirmationPassChange={this.confirmationPassChange}
							handleSubmit={this.handleSubmit}
							passwordMismatch={this.state.passwordMismatch}
							/>
					<h5> {this.state.message} </h5>
					{userMessage}
				</div>
			</div>
		)

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPageContainer)

