import {io} from 'socket.io-client'
export const chatSocket = io('ws://localhost:8900', {
  withCredentials: true, // This is crucial for cookies
})
