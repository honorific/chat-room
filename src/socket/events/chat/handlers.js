import {resetUsers, setUsers} from '../../../redux/slices/users'
import {CHAT_CONSTANTS} from './constants'

export const chatEvents = (dispatch) => {
  return {
    [CHAT_CONSTANTS.READ_ALL_USERS]: (users) => {
      dispatch(resetUsers())
      console.log('list of users are: ', users)
      users.forEach((u) => {
        dispatch(setUsers({gender: u.gender, username: u.username}))
      })
    },
  }
}
