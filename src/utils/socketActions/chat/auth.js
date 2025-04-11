import { startSocketListener } from '../../sockets/chatSocket'
import {emitWithSocket} from './socketManager'

export const authUser = (gender, username) => {
  // should disconnect it so that can read the new cookie
  // otherwise loggedInAs cookie is always undefined
  startSocketListener()
  emitWithSocket('addUser', {gender, username})
    .then(() => {})
    .catch((err) => console.error('Failed:', err))
}
