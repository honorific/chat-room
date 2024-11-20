import {Navigate} from 'react-router-dom'
import cookies from '../../utils/cookies'
import {StyledLogin} from './Login.styles'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import {loginUser} from '../../utils/slices/users'

const Login = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const loggedInUser = useSelector(
    (state) => state.rootReducer.users.loggedInAs,
  )
  const loginLoading = useSelector(
    (state) => state.rootReducer.users.loginLoading,
  )
  const [gender, setGender] = useState('male')

  const genderHandler = (e) => {
    setGender(e.target.innerText.toLowerCase())
  }

  const loginHandler = (e) => {
    e.preventDefault()
    console.log(name, gender)
    dispatch(loginUser({gender, username: name}))
  }

  return (
    <>
      {cookies.get('loggedInAs') && loggedInUser ? (
        <Navigate to='/chat' />
      ) : (
        <StyledLogin loading={loginLoading}>
          <form onSubmit={loginHandler}>
            <input
              type='text'
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <div className='gender'>
              <span
                onClick={genderHandler}
                className={gender === 'male' ? 'selectedGender' : ''}
              >
                Male
              </span>
              <span
                onClick={genderHandler}
                className={gender === 'female' ? 'selectedGender' : ''}
              >
                Female
              </span>
            </div>
            <button>{loginLoading ? '...' : 'Enter'}</button>
          </form>
        </StyledLogin>
      )}
    </>
  )
}

export default Login
