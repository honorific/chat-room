import {resetUsers, setUsers} from '../../../redux/slices/users'
import {chatSocket} from '../../sockets/chatSocket'
import {emitWithSocket} from './socketManager'

export const showOnlineUsers = (dispatch) => {
  emitWithSocket('getAllUsers').then((users) => {
    console.log('return value of emmitimg to server: ', users)
  })
  chatSocket.on('readAllUsers', (users) => {
    dispatch(resetUsers())
    console.log('list of users are: ', users)
    users.forEach((u) => {
      dispatch(setUsers({gender: u.gender, username: u.username}))
    })
  })
}
