import {lazy} from 'react'
import Message from '../../components/message/Message'
import Rightbar from '../../components/rightbar/Rightbar'
import SendMessage from '../../components/sendMessage/SendMessage'
import {StyledChat} from './Chat.styles'
import {useDispatch} from 'react-redux'
import {toggleTheme} from '../../utils/slices/theme.js'
const ChatBox = lazy(() => import('../../components/chatBox/ChatBox.js'))

const Chat = () => {
  const dispatch = useDispatch()
  const themeChanger = () => {
    dispatch(toggleTheme())
  }

  return (
    <StyledChat>
      <div className='rightbarContainer'>
        <Rightbar />
      </div>
      <ChatBox />
      <div className='main'>
        <div className='mainScroller'>
          <div>
            <Message
              own={true}
              message={{username: 'ali', text: 'hello', time: '1 min ago'}}
            />
            <Message
              message={{
                username: 'reza',
                text: 'hello world',
                time: 'just now',
              }}
            />
            <Message
              message={{username: 'sara', text: 'hi', time: 'just now'}}
              last={true}
            />
            <Message
              own={true}
              message={{username: 'ali', text: 'hello', time: '1 min ago'}}
            />
            <Message
              message={{
                username: 'reza',
                text: 'hello world',
                time: 'just now',
              }}
            />
            <Message
              message={{username: 'sara', text: 'hi', time: 'just now'}}
              last={true}
            />
            <Message
              own={true}
              message={{username: 'ali', text: 'hello', time: '1 min ago'}}
            />
            <Message
              message={{
                username: 'reza',
                text: 'hello world',
                time: 'just now',
              }}
            />
            <Message
              message={{username: 'sara', text: 'hi', time: 'just now'}}
              last={true}
            />
            <Message
              own={true}
              message={{username: 'ali', text: 'hello', time: '1 min ago'}}
            />
            <Message
              message={{
                username: 'reza',
                text: 'hello world',
                time: 'just now',
              }}
            />
            <Message
              message={{username: 'sara', text: 'hi', time: 'just now'}}
              last={true}
            />
            <Message
              own={true}
              message={{username: 'ali', text: 'hello', time: '1 min ago'}}
            />
            <Message
              message={{
                username: 'reza',
                text: 'hello world',
                time: 'just now',
              }}
            />
            <Message
              message={{username: 'sara', text: 'hi', time: 'just now'}}
              last={true}
            />
            <button onClick={themeChanger}>toggle</button>
          </div>
        </div>
        <SendMessage />
      </div>
    </StyledChat>
  )
}

export default Chat
