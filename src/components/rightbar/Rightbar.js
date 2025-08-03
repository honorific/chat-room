import {useDispatch, useSelector} from 'react-redux'
import RoomAndUsers from '../roomAndUsers/RoomAndUsers'
import {StyledRightbar} from './Rightbar.styles'
import {resetChatOpen} from '../../redux/slices/general'
import {useEffect, useState} from 'react'
import {getChatSocket} from '../../socket/sockets/chatSocket'
import cookies from '../../utils/cookie/initialize'
import {loginUser, setLoggedInAs} from '../../redux/slices/users'
import {showOnlineUsers} from '../../socket/socketActions/chat/user'
import {userApi} from '../../api/userApi'
import {authUser} from '../../socket/socketActions/chat/auth'
import {
  connectChatSocketConnection,
  disconnectChatSocketConnection,
} from '../../redux/slices/socket'
import {useApi} from '../../hooks/useApi'

const Rightbar = () => {
  const [inDb, setInDb] = useState(true)
  const users = useSelector((state) => state.rootReducer.users.users)
  const chatSocketConnection = useSelector(
    (state) => state.rootReducer.chatSocketConnection,
  )
  const {callApi} = useApi(userApi.exist, {
    autoFetch: false, // Disable initial fetch
  })
  const dispatch = useDispatch()
  const chatSocket = getChatSocket()
  const scrollHandler = () => {
    dispatch(resetChatOpen())
  }

  useEffect(() => {
    const usernameChecker = async (username) => {
      try {
        const response = await callApi(username)
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
      // cleanupSocket()
      console.log('username of cookie is: ', username)
      dispatch(setLoggedInAs(cookies.get('loggedInAs')))
      //initSocket()
      usernameChecker(username)
      authUser(gender, username, false)
      dispatch(connectChatSocketConnection())
    }
  }, [])
  useEffect(() => {
    console.log('chatSocket in rightbar', chatSocket)
    showOnlineUsers(dispatch)
    
    // cant send request of user deletion from database in client, because
    // it wont affect the last user that is online
    console.log('change in chatSocket!')
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
