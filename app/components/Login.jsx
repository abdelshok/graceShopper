import React from 'react'
import {browserHistory} from 'react-router'

export const Login = ({ login }) => (
  <div className="log-in-form">
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
    browserHistory.goBack()
  } }>
  <h1 className="log-in-title">Log In</h1>
    <input name="username" />
    <input name="password" type="password" />
    <input type="submit" value="Login" />
  </form>
  </div>
)



import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  null,
  {login},
)(Login)




