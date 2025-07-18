import {resetUsers, setUsers} from '../../../redux/slices/users'
import { CHAT_CONSTANTS } from '../../events/chat/constants'
import {chatEvents} from '../../events/chat/handlers'
import {chatSocket} from '../../sockets/chatSocket'
import {emitWithSocket, onSocketEvent} from './socketManager'

export const showOnlineUsers = (dispatch) => {
  emitWithSocket('getAllUsers').then((users) => {
    console.log('return value of emmitimg to server: ', users)
  })
  // chatSocket.on('readAllUsers', (users) => {
  //   dispatch(resetUsers())
  //   console.log('list of users are: ', users)
  //   users.forEach((u) => {
  //     dispatch(setUsers({gender: u.gender, username: u.username}))
  //   })
  // })
  // onSocketEvent('readAllUsers', (users) => {
  //   dispatch(resetUsers())
  //   console.log('list of users are: ', users)
  //   users.forEach((u) => {
  //     dispatch(setUsers({gender: u.gender, username: u.username}))
  //   })
  // })

  const events = chatEvents(dispatch)
  onSocketEvent(
    CHAT_CONSTANTS.READ_ALL_USERS,
    events[CHAT_CONSTANTS.READ_ALL_USERS],
  )
}
