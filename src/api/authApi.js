import axios from 'axios'

const authApi = axios.create({
  baseURL: 'http://localhost:4000/api/v1/auth',
})

export const authApiRegister = (args) => {
  return authApi.post('/register', args)
}
