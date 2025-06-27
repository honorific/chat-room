import axios from 'axios'

const authApiInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1/auth',
})

export const authApiRegister = (args) => {}

export const authApi = {
  register: (args) => {
    return authApiInstance.post('/register', args)
  },
}
