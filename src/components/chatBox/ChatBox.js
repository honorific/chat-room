import {useRef, useState} from 'react'
import {StyledChatBox} from './ChatBox.styles'
import {Close, Fullscreen, Minimize} from '@mui/icons-material'
import Message from '../message/Message'
import SendMessage from '../sendMessage/SendMessage'

const ChatBox = ({chatWith}) => {
  const elemref = useRef('')
  const sendMessageRef = useRef('')
  const [minimized, setMinimized] = useState(true)
  const dragHandler = () => {
    const mouseMoveHandler = (el) => {
      if (el.buttons === 1) {
        elemref.current.style.position = 'absolute'
        elemref.current.style.left = `${el.clientX - 200}px`
        elemref.current.style.top = `${el.clientY - 50}px`
      }
    }
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    })
  }

  const minimizeHandler = () => {
    elemref.current.children[4].style.height = minimized ? '0px' : '300px'
    sendMessageRef.current.style.visibility = minimized ? 'hidden' : 'visible'
    setMinimized(!minimized)
  }
  return (
    <StyledChatBox ref={elemref} onMouseDown={dragHandler} className='chatBox'>
      <Close />
      <Fullscreen />
      <Minimize onClick={minimizeHandler} />
      <h6>chat with {chatWith}</h6>
      <div>
        <div>
          <Message
            own={true}
            message={{username: 'ali', text: 'hello', time: '1 min ago'}}
            dm={true}
          />
          <Message
            message={{username: 'reza', text: 'hello world', time: 'just now'}}
            dm={true}
          />
          <Message
            message={{username: 'sara', text: 'hi', time: 'just now'}}
            dm={true}
          />
          <Message
            own={true}
            message={{username: 'ali', text: 'hello', time: '1 min ago'}}
            dm={true}
          />
          <Message
            message={{username: 'reza', text: 'hello world', time: 'just now'}}
            dm={true}
          />
          <Message
            message={{username: 'reza', text: 'hello world', time: 'just now'}}
            dm={true}
          />
          <Message
            message={{username: 'reza', text: 'hello world', time: 'just now'}}
            dm={true}
          />
          <Message
            message={{username: 'reza', text: 'hello world', time: 'just now'}}
            dm={true}
          />
          <Message
            message={{username: 'reza', text: 'hello world', time: 'just now'}}
            dm={true}
          />
          <Message
            message={{username: 'reza', text: 'hello world', time: 'just now'}}
            dm={true}
          />
          <Message
            message={{username: 'reza', text: 'hello world', time: 'just now'}}
            dm={true}
          />
          <Message
            message={{username: 'reza', text: 'hello world', time: 'just now'}}
            dm={true}
          />
          <Message
            message={{username: 'sara', text: 'hi', time: 'just now'}}
            last={true}
            dm={true}
          />
        </div>
      </div>
      <SendMessage ref={sendMessageRef} />
    </StyledChatBox>
  )
}

export default ChatBox
