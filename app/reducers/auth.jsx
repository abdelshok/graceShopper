import axios from 'axios'

import {setCurrentCart} from './cart'

const AUTHENTICATED = 'AUTHENTICATED'

const reducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user
    default:
      return state
  }
}

export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const whoami = () =>
  (dispatch, getState) =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .then(() => {
        if (getState().auth !== ''){
          dispatch(setCurrentCart(getState().auth.id))
        } else if (getState().auth === '') {
          dispatch(setCurrentCart())
        }
      })
      .catch(() => dispatch(authenticated(null)))

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export default reducer
