import {io} from 'socket.io-client'
import listenerMiddleware from '../../redux/middlewares/listenerMiddleware'

let chatSocket = null
let socketListenerUnsubscribe = null

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

    return chatSocket
  } else {
    return
  }
}

const startSocketListener = () => {
  // Unsubscribe any existing listener first (avoid duplicates)
  if (socketListenerUnsubscribe) socketListenerUnsubscribe()

  // Start new listener and store unsubscribe function
  socketListenerUnsubscribe = listenerMiddleware.startListening({
    predicate: (action, currentState, previousState) => {
      console.log('currnetState in predicate is: ', currentState)
      return (
        currentState.rootReducer.users.loggedInAs !==
        previousState.rootReducer.users.loggedInAs
      )
    },
    effect: (action, listenerApi) => {
      const users = listenerApi.getState().rootReducer.users.loggedInAs
      initializeSocket(users) // Store new socket
    },
  })

  return socketListenerUnsubscribe // Return the cleanup function
}

// Full cleanup function (unsubscribe + disconnect socket)
const cleanupSocket = () => {
  if (socketListenerUnsubscribe) {
    socketListenerUnsubscribe() // Remove Redux listener
    socketListenerUnsubscribe = null
  }
  if (chatSocket) {
    chatSocket.disconnect() // Close socket
    chatSocket = null
  }
}

export {chatSocket, startSocketListener, cleanupSocket}
