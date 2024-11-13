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
  const [gender, setGender] = useState('')

  const genderHandler = (e) => {
    setGender(e.target.innerText)
  }

  const loginHandler = (e) => {
    e.preventDefault()
    console.log(name, gender)
    //dispatch(loginUser({username: name, gender}))
  }

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
            <div className='gender'>
              <span
                onClick={genderHandler}
                className={gender === 'Male' ? 'selectedGender' : ''}
              >
                Male
              </span>
              <span
                onClick={genderHandler}
                className={gender === 'Female' ? 'selectedGender' : ''}
              >
                Female
              </span>
            </div>
            <button>Enter</button>
          </form>
        </StyledLogin>
      )}
    </>
  )
}

export default Login
