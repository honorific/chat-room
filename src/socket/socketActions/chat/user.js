import {resetUsers, setUsers} from '../../../redux/slices/users'
import {emitWithSocket} from './socketManager'

export const showOnlineUsers = (dispatch) => {
  emitWithSocket('getAllUsers').then((users) => {
    dispatch(resetUsers())
    console.log('list of users are: ', users)
    users.forEach((u) => {
      dispatch(setUsers({gender: u.gender, username: u.username}))
    })
  })
}
