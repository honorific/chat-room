import axios from 'axios'

const userApiInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1/user',
})

export const userApi = {
  exist: (username) => {
    return userApiInstance.get(`/exist?username=${username}`)
  },
}
