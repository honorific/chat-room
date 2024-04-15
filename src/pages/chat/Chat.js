import OnlineUser from '../../components/onlineUser/OnlineUser.js'
import RoomTitle from '../../components/roomTitle/RoomTitle.js'
import './Chat.styles.js'
import {StyledChat} from './Chat.styles.js'

const Chat = () => {
  return (
    <StyledChat>
      <div className='rightbar'>
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
        <RoomTitle title="German speakers" />
      </div>
      <div className='main'></div>
    </StyledChat>
  )
}

export default Chat
