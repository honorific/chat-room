import {useDispatch, useSelector} from 'react-redux'
import RoomAndUsers from '../roomAndUsers/RoomAndUsers'
import {StyledRightbar} from './Rightbar.styles'
import {resetChatOpen} from '../../utils/slices/general'
import {useEffect, useState} from 'react'
import {chatSocket} from '../../utils/sockets'
import cookies from '../../utils/cookie/initialize'
import {loginUser} from '../../utils/slices/users'
import {showOnlineUsers} from '../../utils/socketActions/user'
import {userApiExist} from '../../api/userApi'

const Rightbar = () => {
  const [inDb, setInDb] = useState(true)
  const users = useSelector((state) => state.rootReducer.users.users)
  const dispatch = useDispatch()
  const scrollHandler = () => {
    dispatch(resetChatOpen())
  }

  useEffect(() => {
    const usernameChecker = async (username) => {
      try {
        const response = await userApiExist(username)
        if (!response.data) {
          console.log(response)
          setInDb(false)
        }
      } catch (error) {
        console.log("couldn't retrieve user from db")
      }
    }
    if (cookies.get('loggedInAs')) {
      const {gender, username} = cookies.get('loggedInAs')
      console.log('gender of cookie:', gender)
      console.log('username of cookie:', username)
      chatSocket.emit('addUser', {
        gender,
        username,
      })
      usernameChecker(username)
    }
  }, [])
  useEffect(() => {
    showOnlineUsers(chatSocket, dispatch)
    // cant send request of user deletion from database in client, because
    // it wont affect the last user that is online
  }, [chatSocket])

  useEffect(() => {
    const {gender, username} = cookies.get('loggedInAs')
    if (!inDb) {
      dispatch(loginUser({gender, username}))
    }
  }, [inDb])

  // window.addEventListener('beforeunload', (e) => {
  //   e.preventDefault()
  //   cookies.remove('loggedInAs')
  // })

  return (
    <StyledRightbar onScroll={scrollHandler}>
      <div className='content'>
        <RoomAndUsers users={users} />
        <RoomAndUsers
          otherRoom={true}
          roomTitle='German speakers'
          users={users}
        />
        <RoomAndUsers
          otherRoom={true}
          roomTitle='Russian speakers'
          users={users}
        />
      </div>
    </StyledRightbar>
  )
}

export default Rightbar
