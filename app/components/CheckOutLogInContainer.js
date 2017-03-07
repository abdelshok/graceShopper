import React from 'react'
import {browserHistory} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

const buttonStyle = {
  margin: 20,
  float: 'center',
  borderColor: 'white'
}

export const CheckOutLogin = ({ login }) => (
  <div className='log-in-form'>
  <form>
  <h1 className="log-in-title">Log In</h1>
    <input name="Email" />
    <input name="Password" type="password" />
    <RaisedButton label="Submit" style={buttonStyle} onClick={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
    browserHistory.goBack()
  } } />
  </form>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  null,
  {login},
)(CheckOutLogin)