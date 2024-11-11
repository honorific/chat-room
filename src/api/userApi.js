import axios from 'axios'

const userApi = axios.create({
  baseURL: 'http://localhost:4000/api/v1/auth',
})

export default userApi
