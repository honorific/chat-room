import OnlineUser from '../../components/onlineUser/OnlineUser.js'
import './Chat.styles.js'
import {StyledChat} from './Chat.styles.js'

const Chat = () => {
  return (
    <StyledChat>
      <div className='rightbar'>
        <ul className='onlineUsers'>
          <OnlineUser gender='male' username='ali' />
          <OnlineUser gender='female' username='zahra' />
        </ul>
      </div>
      <div className='main'></div>
    </StyledChat>
  )
}

export default Chat
