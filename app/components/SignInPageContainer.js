import React, { Component } from 'react'
import {connect} from 'react-redux'
import SignUpPageComponent from './SignUpPageComponent' 
import {createUser} from '../reducers/user'
import Login from './Login'

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

class SignUpPageContainer extends Component {

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
			 this.setState({passwordMismatch: true, message: "Passwords don't match"})
		} else if (this.state.password === this.state.password2 && this.state.password.length < 6) {
			this.setState({passwordMismatch: false, message: "Password needs to be longer than 6 characters"})
		} else if (this.state.password === this.state.password2 && this.state.password !== "" && this.state.password.length >= 6) {
			this.props.createNewUser(this.state)
			this.setState({
				name: '',
				email: '',
				password: '',
				password2: '',
				passwordMismatch: false,
				message: ''})
			}
		}

	render() {
		const userExists = this.state.userExists
		const userCreated = this.state.newUserCreated
		if (userExists) {
			this.setState({
				message: 'User Already Exists, Please Login'
			})
		} else if (userCreated) {
			this.setState({
				message: 'Thanks for Signing Up!'
			})
		}
		// the state is supposed to be re-rendered if user already exists
		// and userExists is supposed to become true so this message shows
		// but it does not work yet. I'm fixing it tomorrow. 
		return (
			<div>
			<h1> Login </h1>
			<Login/>
			<h1> Sign Up </h1>
			<SignUpPageComponent 
			nameHandleChange={this.nameHandleChange}  
			passwordHandleChange={this.passwordHandleChange} 
			emailHandleChange={this.emailHandleChange} 
			confirmationPassChange={this.confirmationPassChange} 
			handleSubmit={this.handleSubmit}
			passwordMismatch={this.state.passwordMismatch}
			/>
			<h5> {this.state.message} </h5>
			</div> 
		)

	}

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPageContainer)

