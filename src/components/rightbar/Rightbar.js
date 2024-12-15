import {useDispatch, useSelector} from 'react-redux'
import RoomAndUsers from '../roomAndUsers/RoomAndUsers'
import {StyledRightbar} from './Rightbar.styles'
import {resetChatOpen} from '../../utils/slices/general'
import {resetUsers, setUsers} from '../../utils/slices/users'
import {useEffect} from 'react'
import {chatSocket} from '../../utils/sockets'
import cookies from '../../utils/cookies'

const Rightbar = () => {
  const users = useSelector((state) => state.rootReducer.users.users)
  const dispatch = useDispatch()
  const scrollHandler = () => {
    dispatch(resetChatOpen())
  }

  useEffect(() => {
    chatSocket.emit('getAllUsers')
    chatSocket.on('getUsers', (listOfUsers) => {
      dispatch(resetUsers())
      console.log('list of users are: ', listOfUsers)
      listOfUsers.forEach((u) => {
        dispatch(setUsers({gender: u.gender, username: u.username}))
      })
    })
    // cant send request of user deletion from database in client, because
    // it wont affect the last user that is online
  }, [chatSocket])

  window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    cookies.remove('loggedInAs')
  })

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
