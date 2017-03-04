import React from 'react';
import TextField from 'material-ui/TextField';
import {blueGrey300, gray500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';
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
  width: 300
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

const TextFieldExampleCustomize = () => (
  <div>
    <Paper zDepth={2} style={containerStyle}>
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
    <RaisedButton label="Submit" primary={true} style={buttonStyle} />



    </Paper>
  </div>
);

export default TextFieldExampleCustomize;
