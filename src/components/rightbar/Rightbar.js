import RoomAndUsers from '../roomAndUsers/RoomAndUsers'
import {StyledRightbar} from './Rightbar.styles'

const Rightbar = () => {
  const users = [
    {gender: 'male', username: 'ali'},
    {gender: 'female', username: 'atena'},
    {gender: 'female', username: 'zahra', chatting: true},
    {gender: 'female', username: 'mohadese'},
    {gender: 'female', username: 'sara', chatting: {number: 3}},
  ]
  return (
    <StyledRightbar>
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
