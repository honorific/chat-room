import axios from 'axios'
import cookies from '../utils/cookies'

let token = null
if (cookies.get('loggedInAs')) {
  const userData = cookies.get('loggedInAs')
  token = userData.token
}

const chatApi = axios.create({
  baseURL: 'http://localhost:4000/api/v1/chat',
  headers: {
    Authorization: `Bearer ${token}`, // Set the Authorization header
    'Content-Type': 'application/json', // Optional: Specify content type
  },
})

export const chatApiAddChat = (args) => {
  return chatApi.post('/send', args)
}
