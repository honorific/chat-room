import Rightbar from '../../components/rightbar/Rightbar'
import {StyledChat} from './Chat.styles'

const Chat = () => {
  return (
    <StyledChat>
      <div className='rightbarContainer'>
        <Rightbar />
      </div>
      <div className='main'></div>
    </StyledChat>
  )
}

export default Chat
