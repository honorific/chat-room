import axios from 'axios'

const userApi = axios.create({
  baseURL: 'http://localhost:4000/api/v1/user',
})

export const userApiExist = async (username) => {
  try {
    return userApi.get(`/exist?username=${username}`)
  } catch (_err) {
    console.log("username didn't found in db")
  }
}
