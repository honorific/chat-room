import {resetUsers, setUsers} from '../../../redux/slices/users'

export const getUsersHandler = (listOfUsers, dispatch) => {
  dispatch(resetUsers())
  console.log('list of users are: ', listOfUsers)
  listOfUsers.forEach((u) => {
    dispatch(setUsers({gender: u.gender, username: u.username}))
  })
}

export const showOnlineUsers = (emitWithSocket, onSocketEvent, dispatch) => {
  emitWithSocket('getAllUsers')
  onSocketEvent('getUsers', (listOfUsers) => {
    getUsersHandler(listOfUsers, dispatch)
  })
}
