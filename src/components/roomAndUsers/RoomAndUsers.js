import OnlineUser from '../onlineUser/OnlineUser'
import RoomTitle from '../roomTitle/RoomTitle'
import {StyledRoomAndUsers} from './RoomAndUsers.styles'

const RoomAndUsers = ({otherRoom, roomTitle, users}) => {
  // a prop whith value of array should be passed for list online users
  return (
    <StyledRoomAndUsers>
      {otherRoom && <RoomTitle title={roomTitle} />}
      <ul className='onlineUsers'>
        {users.map((user) => {
          return <OnlineUser {...(user)} />
        })}
      </ul>
    </StyledRoomAndUsers>
  )
}

export default RoomAndUsers
