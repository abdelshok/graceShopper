import React from 'react'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

export default function GuestOrderConfirmationContainer () {

  const style = {
    width: '100%',
    margin: 20
  }

  const headerStyle = {
    padding: 20,
  }

   return (
     <div>
     <div className="checkout-thankyou-container">
     <Paper circle={false} style={style} zDepth={4}>
      <h1 className="checkout-thankyou">Thank you for your order!</h1>
      <Subheader style={headerStyle}>Please check your email for order details</Subheader>
    </Paper>
    <RaisedButton label="Back to store" default={true} style={{margin: 20}} onClick={() => browserHistory.push('/products')} />
    </div>
    </div>
  )
}

