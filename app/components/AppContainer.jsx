import React, { Component }  from 'react'
import {Tabs, Tab} from 'material-ui'
import { browserHistory } from 'react-router'
import {connect} from 'react-redux'
import WhoAmI from './WhoAmI'
import SignInPageContainer from './SignInPageContainer'



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

  onClick(value) {
  browserHistory.push(value)
}



  render() {
    return (
            <div>
              <Tabs >
                <Tab label="Home" onActive={()=> this.onClick('/products')}/>
                <Tab label="Cart" onActive={()=> this.onClick('/cart')} />
                {this.props.user ? <Tab label="Account" onActive={()=> this.onClick(`/accounts/${this.props.user.id}`)}/> : ''}
              </Tabs>
               {this.props.user ? <WhoAmI /> : <SignInPageContainer/>}
            </div>
    )
  }
}

export default connect(MapStateToProps)(AppContainer)
