import axios from 'axios'

const userApi = axios.create({
  baseURL: 'http://localhost:4000/api/v1/user',
})

export const userApiExist = (username) => {
    return userApi.get(`/exist?username=${username}`)
}
