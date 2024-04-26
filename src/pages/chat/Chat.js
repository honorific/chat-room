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
        <Message own={true} message={{username: 'ali', text: 'hello'}} />
        <Message message={{username: 'reza', text: 'hello world'}} />
        <Message message={{username: 'sara', text: 'hi'}} />
      </div>
    </StyledChat>
  )
}

export default Chat
