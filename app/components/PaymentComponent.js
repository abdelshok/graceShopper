import React from 'react';
import TextField from 'material-ui/TextField';
import {blueGrey300, gray500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 12,
  textAlign: 'center',
  display: 'inline-block',
};

const buttonStyle = {
  margin: 20,
}
const containerStyle = {
  width: 300,
  margin: 20,
  display: 'inline-block'
}

const styles = {
  errorStyle: {
    color: gray500,
  },
  underlineStyle: {
    borderColor: blueGrey300,
  },
  floatingLabelStyle: {
    color: blueGrey300,
    margin: 5
  },
  floatingLabelFocusStyle: {
    color: blueGrey300,
  }
}

const CheckOutInfo= (props) => (
  <div>
    {!props.auth ? (
      <Paper zDepth={4} style={containerStyle}>
      <Subheader>CUSTOMER:</Subheader>
      <TextField
        id="name"
        onChange={props.handleChange}
        floatingLabelText="Name"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      /><br />
      <TextField
        id="email"
        onChange={props.handleChange}
        floatingLabelText="Email"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      /><br />
      </Paper>
    ) : ''}
    <Paper zDepth={2} style={containerStyle}>
    <Subheader>SHIPPING:</Subheader>
    <TextField
      id="adress1"
      onChange={props.handleChange}
      floatingLabelText="Adress 1"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
    <TextField
      id="adress2"
      onChange={props.handleChange}
      floatingLabelText="Adress 2"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
    <TextField
      id="city"
      onChange={props.handleChange}
      floatingLabelText="City"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
     <TextField
      id="state"
      onChange={props.handleChange}
      floatingLabelText="State"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br/>
      <TextField
      id="zip"
      onChange={props.handleChange}
      floatingLabelText="ZIP"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br/>
    </Paper>
    <Paper zDepth={2} style={containerStyle}>
    <Subheader>PAYMENT:</Subheader>
    <TextField
      id="cardName"
      onChange={props.handleChange}
      floatingLabelText="Name on card"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
    <TextField
      id="cardNumber"
      onChange={props.handleChange}
      floatingLabelText="Card number"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
    <TextField
      id="cardExpiration"
      onChange={props.handleChange}
      floatingLabelText="MM / YY"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
     <TextField
      id="cardcCvc"
      onChange={props.handleChange}
      floatingLabelText="CVC"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br/>
      <TextField
      id="cardZip"
      onChange={props.handleChange}
      floatingLabelText="ZIP"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br/>
    </Paper>
    <div>
      <RaisedButton label="Submit" primary={true} style={buttonStyle} onClick={() => props.pushOrder()} />
    </div>
  </div>
)

export default CheckOutInfo;
