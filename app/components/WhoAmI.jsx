import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
        margin: 12,
      }

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <span className="whoami-user-name">{user && user.name}</span>
    <RaisedButton label="Log Out" style={style}  onClick={logout}/>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
