import {Navigate} from 'react-router-dom'
import cookies from '../../utils/slices/cookies'
import {StyledLogin} from './Login.styles'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {loginUser} from '../../utils/slices/users'

const Login = () => {
  const dispatch = useDispatch()
  const loggedInUser = useSelector(
    (state) => state.rootReducer.users.loggedInAs,
  )
  const [name, setName] = useState('')
  const loginHandler = (e) => {
    e.preventDefault()
    cookies.set('loggedInAs', name, ['/', Date.now() + 3600])
    dispatch(loginUser(cookies.get('loggedInAs')))
  }
  return (
    <>
      {loggedInUser ? (
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
