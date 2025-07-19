import axios from 'axios'
import cookies from '../utils/cookie/initialize'

let token = null
if (cookies.get('loggedInAs')) {
  const userData = cookies.get('loggedInAs')
  token = userData.token
}

const chatApiInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1/chat',
  headers: {
    Authorization: `Bearer ${token}`, // Set the Authorization header
    'Content-Type': 'application/json', // Optional: Specify content type
  },
})

export const chatApi = {
  addChat: (args) => {
    return chatApiInstance.post('/send', args)
  },
}
