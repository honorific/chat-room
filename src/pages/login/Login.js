import {Navigate} from 'react-router-dom'
import cookies from '../../utils/cookies'
import {StyledLogin} from './Login.styles'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {loginUser, resetUsers, setUsers} from '../../utils/slices/users'
import {chatSocket} from '../../utils/sockets'

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

  // useEffect(() => {
  //   chatSocket.on('getUsers', (users) => {
  //     users.forEach((u) => {
  //       dispatch(setUsers({gender: u.gender, username: u.username}))
  //     })
  //     console.log(users)
  //   })
  // }, [chatSocket])

  const loginHandler = (e) => {
    e.preventDefault()
    console.log(name, gender)
    dispatch(resetUsers())
    chatSocket.emit('addUser', {gender, username: name})
    dispatch(loginUser({gender: gender, username: name}))
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
