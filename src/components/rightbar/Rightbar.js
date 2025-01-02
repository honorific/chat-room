import {useDispatch, useSelector} from 'react-redux'
import RoomAndUsers from '../roomAndUsers/RoomAndUsers'
import {StyledRightbar} from './Rightbar.styles'
import {resetChatOpen} from '../../utils/slices/general'
import {useEffect} from 'react'
import {chatSocket} from '../../utils/sockets'
import cookies from '../../utils/cookies'
import {loginUser} from '../../utils/slices/users'
import {showOnlineUsers} from '../../utils/socketActions/user'

const Rightbar = () => {
  const users = useSelector((state) => state.rootReducer.users.users)
  const dispatch = useDispatch()
  const scrollHandler = () => {
    dispatch(resetChatOpen())
  }

  useEffect(() => {
    if (cookies.get('loggedInAs')) {
      const {gender, username} = cookies.get('loggedInAs')
      console.log('gender of cookie:', gender)
      console.log('username of cookie:', username)
      chatSocket.emit('addUser', {
        gender,
        username,
      })
      dispatch(loginUser({gender, username}))
    }
  }, [])
  useEffect(() => {
    showOnlineUsers(chatSocket, dispatch)
    // cant send request of user deletion from database in client, because
    // it wont affect the last user that is online
  }, [chatSocket])

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
