import React, { Component }  from 'react'
import {Tabs, Tab} from 'material-ui'
import { browserHistory } from 'react-router'
import {connect} from 'react-redux'
import WhoAmI from './WhoAmI'
import SignUpPageContainer from './SignUpPageContainer'
import RaisedButton from 'material-ui/RaisedButton'

const headerStyle = {
  textAlign: 'center',
  fontsize: 100
}

const buttonStyle = {
  margin: 20,
  float: 'right',
  borderColor: 'white',
  borderStyle: 'none'
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
      const style = {
        margin: 12,
      }
    return (
            <div>
            <h1 style={headerStyle} >KANDINSKY</h1>
            {this.props.user ? <WhoAmI /> : <div>
            <RaisedButton label="Sign Up" style={buttonStyle} onClick={this.onSignUpClick} />
            <RaisedButton label="Log in" style={buttonStyle} onClick={this.onLogInClick} /></div>}
              <Tabs style={navBar}>
                <Tab label="Home"  style={navBar} onActive={()=> this.onClick('/products')}/>
                <Tab label="Cart" style={navBar} onActive={()=> this.onClick('/cart')} />
                {this.props.user ? <Tab label="Account" onActive={()=> this.onClick(`/accounts/${this.props.user.id}`)}/> : ''}
              </Tabs>
            </div>
    )
  }
}

export default connect(MapStateToProps)(AppContainer)
