import {useDispatch, useSelector} from 'react-redux'
import RoomAndUsers from '../roomAndUsers/RoomAndUsers'
import {StyledRightbar} from './Rightbar.styles'
import {resetChatOpen} from '../../utils/slices/general'
import {setUsers} from '../../utils/slices/users'
import {useEffect} from 'react'

const Rightbar = () => {
  const fakeUsers = [
    {gender: 'male', username: 'ali'},
    {gender: 'female', username: 'atena'},
    {gender: 'female', username: 'zahra', chatting: true},
    {gender: 'female', username: 'mohadese'},
    {gender: 'female', username: 'sara', chatting: {number: 3}},
  ]
  const users = useSelector((state) => state.rootReducer.users.users)
  const dispatch = useDispatch()
  const scrollHandler = () => {
    dispatch(resetChatOpen())
  }

  useEffect(() => {
    dispatch(setUsers(fakeUsers))
  }, [])

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
