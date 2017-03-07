import React from 'react'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader';
import {indigo800} from 'material-ui/styles/colors';
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';

export default function GuestOrderConfirmationContainer (props) {



  const style = {
    width: 500,
    margin: 20
  }

  const headerStyle = {
    padding: 20,
    color: indigo800,
  }



   return (
     <div>
     <Paper circle={false} style={style} zDepth={4}>
      <h2 style={{margin: 10}}>Thank you for your order!</h2>

      <Subheader style={headerStyle}>Please check your email for order details</Subheader>
    </Paper>
    <RaisedButton label="Back to store" primary={true} style={{margin: 20}} onClick={() => browserHistory.push('/products')} />
    </div>
  )
}


