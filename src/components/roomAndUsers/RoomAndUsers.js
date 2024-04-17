import OnlineUser from '../onlineUser/OnlineUser'
import RoomTitle from '../roomTitle/RoomTitle'
import {StyledRoomAndUsers} from './RoomAndUsers.styles'

const RoomAndUsers = ({otherRoom, roomTitle}) => {
  // a prop whith value of array should be passed for list online users
  return (
    <StyledRoomAndUsers>
      {otherRoom && <RoomTitle title={roomTitle} />}
      <ul className='onlineUsers'>
        <OnlineUser gender='male' username='ali' />
        <OnlineUser gender='female' username='zahra' />
        <OnlineUser gender='male' username='ali' chatting={{number: 3}} />
        <OnlineUser gender='female' username='zahra' />
        <OnlineUser gender='male' username='ali' />
        <OnlineUser gender='female' username='zahra' />
        <OnlineUser gender='male' username='ali' />
        <OnlineUser gender='female' username='zahra' chatting />
        <OnlineUser gender='male' username='ali' />
        <OnlineUser gender='female' username='zahra' />
      </ul>
    </StyledRoomAndUsers>
  )
}

export default RoomAndUsers
