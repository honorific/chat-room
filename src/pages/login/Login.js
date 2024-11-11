import {Navigate} from 'react-router-dom'
import cookies from '../../utils/cookies'
import {StyledLogin} from './Login.styles'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {loginUser} from '../../utils/slices/users'
import userApi from '../../api/userApi'

const Login = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.rootReducer.users)
  const [name, setName] = useState('')
  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(loginUser(name))
  }
  // useEffect(() => {
  //   const responser = async () => {
  //     const response = await userApi.post('/register', {
  //       username: 'gholi',
  //     })
  //     console.log(response)
  //     return response
  //   }
  //   responser()
  // }, [])

  return (
    <>
      {cookies.get('loggedInAs') ? (
        <Navigate to='/chat' />
      ) : (
        <StyledLogin>
          <form onSubmit={loginHandler}>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button>Enter</button>
          </form>
        </StyledLogin>
      )}
    </>
  )
}

export default Login
