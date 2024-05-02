import Message from '../../components/message/Message'
import Rightbar from '../../components/rightbar/Rightbar'
import {StyledChat} from './Chat.styles'

const Chat = () => {
  return (
    <StyledChat>
      <div className='rightbarContainer'>
        <Rightbar />
      </div>
      <div className='main'>
        <Message
          own={true}
          message={{username: 'ali', text: 'hello', time: '1 min ago'}}
        />
        <Message
          message={{username: 'reza', text: 'hello world', time: 'just now'}}
        />
        <Message
          message={{username: 'sara', text: 'hi', time: 'just now'}}
          last={true}
        />
      </div>
    </StyledChat>
  )
}

export default Chat
