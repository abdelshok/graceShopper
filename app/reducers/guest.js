const GUEST_USER = 'GUEST_USER'

const reducer = (state = null, action) => {
  switch (action.type) {
    case GUEST_USER:
      return action.guestUserId
    default:
      return state
  }
}

export const guestUser = guestUserId => ({
  type: GUEST_USER,
  guestUserId: guestUserId
})


export default reducer
