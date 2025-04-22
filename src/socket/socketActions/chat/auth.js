import {startSocketListener} from '../../../socket/sockets/chatSocket'
import {emitWithSocket} from './socketManager'

export const authUser = (gender, username, state) => {
  // should disconnect it so that can read the new cookie
  // otherwise loggedInAs cookie is always undefined
  emitWithSocket('addUser', {gender, username})
    .then(() => {})
    .catch((err) => console.error('Failed:', err))
}
