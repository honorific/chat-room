import {resetUsers, setUsers} from '../slices/users'

export const getUsersHandler = (listOfUsers, dispatch) => {
  dispatch(resetUsers())
  console.log('list of users are: ', listOfUsers)
  listOfUsers.forEach((u) => {
    dispatch(setUsers({gender: u.gender, username: u.username}))
  })
}

export const showOnlineUsers = (chatSocket, dispatch) => {
  chatSocket.emit('getAllUsers')
  chatSocket.on('getUsers', (listOfUsers) => {
    getUsersHandler(listOfUsers, dispatch)
  })
}
