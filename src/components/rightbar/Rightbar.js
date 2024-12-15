import {useDispatch, useSelector} from 'react-redux'
import RoomAndUsers from '../roomAndUsers/RoomAndUsers'
import {StyledRightbar} from './Rightbar.styles'
import {resetChatOpen} from '../../utils/slices/general'
import {resetUsers, setUsers} from '../../utils/slices/users'
import {useEffect} from 'react'
import {chatSocket} from '../../utils/sockets'
import cookies from '../../utils/cookies'
import userApi from '../../api/userApi'

const Rightbar = () => {
  const users = useSelector((state) => state.rootReducer.users.users)
  const dispatch = useDispatch()
  const scrollHandler = () => {
    dispatch(resetChatOpen())
  }

  const deleter = async (username) => {
    const response = await userApi.delete(`/leave?username=${username}`)
    // if (response.data.acknowledged) {
    //   chatSocket.emit('user_left', username)
    // }
    if (response) {
      return response.data.acknowledged
    }
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
    chatSocket.on('delete_user', (username) => {
      console.log('username of delete_user is: ', username)
      const deleteResult = deleter(username)
      if (!deleteResult) {
        console.log('could not implement user leave correctly.')
      }
    })
  }, [chatSocket])

  // window.addEventListener('beforeunload', (e) => {
  //   e.preventDefault()
  //   const userInCookie = cookies.get('loggedInAs')
  //   deleter(userInCookie)
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
