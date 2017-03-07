import axios from 'axios'
import {browserHistory} from 'react-router'

import {setCart, setCurrentCart} from './cart'
import {guestUser} from './guest'

const AUTHENTICATED = 'AUTHENTICATED'

const reducer = (state = '', action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user
    default:
      return state
  }
}

export const authenticated = user => ({
  type: AUTHENTICATED, 
  user
})

//for tracking guest users
let guestUserId = 1

export const whoami = () =>
  (dispatch, getState) =>
  //check for logged in authenticated users and set their id or '' on the state
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .then(() => {
        //if someone is logged in, fetch their cart from db and set it on the state
        if (getState().auth.id){
          dispatch(setCurrentCart(getState().auth.id))
        //if no one is logged in, check localStorage for a guest user id
        } else if (!getState().auth.id) {
          if (window.localStorage.getItem('art-store-guest-id')){
            //if a guest user id is find in local storage, add the guest user id to the state
            dispatch(guestUser(JSON.parse(window.localStorage.getItem('art-store-guest-id'))))
            //find out if they have any past productLine saved in local storage, fetch them
            //and add them to the state
            let productLines = window.localStorage.getItem('guest-cart-productLines')
            dispatch(setCart({productLines: JSON.parse([productLines])}))
          } else {
            //if this is the first time they are here as a guest, set a new guest id into localStorage
            window.localStorage.setItem('art-store-guest-id', guestUserId++)
            //add a key for productLine with no value
            window.localStorage.setItem('guest-cart-productLines')
            //add their guest id to the state
            dispatch(guestUser(window.localStorage.getItem('art-store-guest-id')))
          }
        }
      })
      .catch(() => dispatch(authenticated('')))

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() =>
        dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => {
        dispatch(whoami())
        browserHistory.push('/products')
      })
      .catch(() => dispatch(whoami()))

export default reducer
