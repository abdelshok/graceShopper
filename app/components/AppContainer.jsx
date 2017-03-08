import React, { Component }  from 'react'
import {Tabs, Tab} from 'material-ui'
import { browserHistory } from 'react-router'
import {connect} from 'react-redux'
import WhoAmI from './WhoAmI'
import RaisedButton from 'material-ui/RaisedButton'


const navStyle = {
  textAlign: 'center',
  boxshadow: '10px 10px 5px #888888'
}


const buttonStyle = {
  margin: 20,
  borderColor: 'white'
}

const navBar = {
  background: 'white',
  color: 'black'
}

const MapStateToProps = (state) => {
  return {
    user: state.auth,
  }
}

class AppContainer extends Component {

  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick (value) {
    browserHistory.push(value)
  }

  onSignUpClick (){
    browserHistory.push('/signup')
  }

  onLogInClick (){
    browserHistory.push('/login')
  }


  render() {
    return (
            <div>
              <div>
                <h1 className="header">THE ART SHOP</h1>
                  <div className="login-sign-up-header">
                  {this.props.user ? <WhoAmI /> :
                    <div><RaisedButton label="Sign Up" style={buttonStyle} onClick={this.onSignUpClick} />
                         <RaisedButton label="Log in" style={buttonStyle} onClick={this.onLogInClick} /> </div>}
                  </div>
               </div>
              <Tabs style={navStyle}>
                <Tab label="Home"  style={navBar} onActive={() => this.onClick('/products')} />
                <Tab label="Cart" style={navBar} onActive={() => this.onClick('/cart')} />
                {this.props.user ? <Tab label="Account" style={navBar} onActive={() => this.onClick(`/accounts/${this.props.user.id}`)} /> : ''}

              </Tabs>
            </div>
    )
  }
}

  export default connect(MapStateToProps)(AppContainer)
