import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'



export const WhoAmI = ({ user, logout }) => {
	const firstLetter = user.name[0].toUpperCase()
	const style = {margin: 5}
	
	return (
	  <div className="whoami">
		<List className="whoami-text">
		    <ListItem
		      disabled={true}
		      leftAvatar={
		        <Avatar>{firstLetter}</Avatar>
		      }
		    >Hello {user && user.name}! 

	    <RaisedButton label="Log Out" style={style}  onClick={logout} />
	    </ListItem>
	    </List>
	  </div>
)}

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(
  ({ auth }) => ({ user: auth }),
  {logout},
)(WhoAmI)
