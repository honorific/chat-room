import {useDispatch, useSelector} from 'react-redux'
import RoomAndUsers from '../roomAndUsers/RoomAndUsers'
import {StyledRightbar} from './Rightbar.styles'
import {resetChatOpen} from '../../utils/slices/general'
import {resetUsers, setUsers} from '../../utils/slices/users'
import {useEffect} from 'react'
import {chatSocket} from '../../utils/sockets'

const Rightbar = () => {
  const users = useSelector((state) => state.rootReducer.users.users)
  const dispatch = useDispatch()
  const scrollHandler = () => {
    dispatch(resetChatOpen())
  }

  useEffect(() => {
    dispatch(resetUsers())
    chatSocket.emit('getAllUsers')
  }, [])

  useEffect(() => {
    dispatch(resetUsers())
    chatSocket.on('getUsers', (listOfUsers) => {
      listOfUsers.forEach((u) => {
        dispatch(setUsers({gender: u.gender, username: u.username}))
      })
    })
  }, [chatSocket])

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
