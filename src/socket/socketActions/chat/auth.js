import {startSocketListener} from '../../../socket/sockets/chatSocket'
import {emitWithSocket} from './socketManager'

export const authUser = (gender, username, connection) => {
  // should disconnect it so that can read the new cookie
  // otherwise loggedInAs cookie is always undefined
  //const {initSocket} = SocketUse()
  if (!connection) {
    //initSocket()
    startSocketListener()
  }
  emitWithSocket('addUser', {gender, username})
    .then((response) => {
      console.log(`user Added with authUser with: ${gender} | ${username}`)
      console.log(response)
    })
    .catch((err) => console.error('Failed:', err))
}
