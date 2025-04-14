import {io} from 'socket.io-client'

let chatSocket = null
let unsubscribe = null

// Initialize socket with current state
const initializeSocket = (users) => {
  // Accept store as parameter

  if (users) {
    if (chatSocket) {
      chatSocket.disconnect()
      chatSocket.removeAllListeners()
    }

    chatSocket = io('ws://localhost:8900', {
      withCredentials: true,
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    })

    chatSocket.on('connect', () => {
      console.log('Socket connected with fresh credentials')
    })

    chatSocket.on('disconnect', () => {
      console.log('Socket disconnected')
    })
  }
}

// Start listening to Redux store changes
const startSocketListener = (store) => {
  // Accept store as parameter
  initializeSocket(store.getState().rootReducer.users.loggedInAs)
  unsubscribe = store.subscribe(() => {
    const users = store.getState().rootReducer.users.loggedInAs?.users
    initializeSocket(users)
  })
}

const cleanupSocket = () => {
  if (unsubscribe) unsubscribe()
  if (chatSocket) {
    chatSocket.disconnect()
    chatSocket = null
  }
}

export {chatSocket, startSocketListener, cleanupSocket}
