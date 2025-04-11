import {io} from 'socket.io-client'
import {store} from '../store' // import your Redux store

let chatSocket = null
let unsubscribe = null

// Initialize socket with current state
const initializeSocket = () => {
  const {users} = store.getState().rootReducer.users.loggedInAs

  if (users) {
    // Clean up existing socket if it exists
    if (chatSocket) {
      chatSocket.disconnect()
      chatSocket.removeAllListeners()
    }

    // Create new socket with credentials
    chatSocket = io('ws://localhost:8900', {
      withCredentials: true,
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    })

    // Add basic event listeners
    chatSocket.on('connect', () => {
      console.log('Socket connected with fresh credentials')
    })

    chatSocket.on('disconnect', () => {
      console.log('Socket disconnected')
    })
  }
}

// Start listening to Redux store changes
const startSocketListener = () => {
  // Initialize immediately if users exist
  initializeSocket()

  // Subscribe to future changes
  unsubscribe = store.subscribe(initializeSocket)
}

// Clean up everything
const cleanupSocket = () => {
  if (unsubscribe) unsubscribe()
  if (chatSocket) {
    chatSocket.disconnect()
    chatSocket = null
  }
}

// Export the socket instance and management functions
export {chatSocket, startSocketListener, cleanupSocket}
