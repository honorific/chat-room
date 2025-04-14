// socketActions.js
import {chatSocket} from '../../sockets/chatSocket'

export const emitWithSocket = (event, data) => {
  return new Promise((resolve, reject) => {
    if (!chatSocket) {
      return reject(new Error('Socket not initialized'))
    }

    if (chatSocket.connected) {
      chatSocket.emit(event, data, (response) => {
        resolve(response)
      })
    } else {
      // Wait for connection if not immediately available
      const timeout = setTimeout(() => {
        reject(new Error('Socket connection timeout'))
      }, 5000)

      chatSocket.once('connect', () => {
        clearTimeout(timeout)
        chatSocket.emit(event, data, (response) => {
          resolve(response)
        })
      })
    }
  })
}

export const onSocketEvent = (eventName, callback) => {
  if (chatSocket) {
    chatSocket.on(eventName, callback)
  }
}
