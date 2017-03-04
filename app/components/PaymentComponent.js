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
  margin: 12
}
const containerStyle = {
  width: 300,
  margin: 20
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

const user = ''

const CheckOutInfo= (props) => (
  <div>
    {!props.auth ? (
      <Paper zDepth={2} style={containerStyle}>
      <Subheader>CUSTOMER:</Subheader>
      <TextField
        floatingLabelText="Name"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      /><br />
      <TextField
        floatingLabelText="Email"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      /><br />
      </Paper>
    ) : ''}
    <Paper zDepth={2} style={containerStyle}>
    <Subheader>SHIPPING:</Subheader>
    <TextField
      floatingLabelText="Adress 1"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
    <TextField
      floatingLabelText="Adress 2"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
    <TextField
      floatingLabelText="City"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
     <TextField
      floatingLabelText="State"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br/>
      <TextField
      floatingLabelText="ZIP"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br/>
    </Paper>
    <Paper zDepth={2} style={containerStyle}>
    <Subheader>PAYMENT:</Subheader>
    <TextField
      floatingLabelText="Name on card"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
    <TextField
      floatingLabelText="Card number"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
    <TextField
      floatingLabelText="MM / YY"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br />
     <TextField
      floatingLabelText="CVC"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br/>
      <TextField
      floatingLabelText="ZIP"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br/>
    </Paper>
    <Paper zDepth={2} style={containerStyle}>
      <RaisedButton label="Submit" primary={true} style={buttonStyle} onClick={() => props.pushOrder()} />
    </Paper>
  </div>
)

export default CheckOutInfo;
