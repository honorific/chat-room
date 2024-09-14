import {useRef} from 'react'
import {StyledChatBox} from './ChatBox.styles'
import {Close, Fullscreen, Minimize} from '@mui/icons-material'
import Message from '../message/Message'
import SendMessage from '../sendMessage/SendMessage'

const ChatBox = () => {
  const elemref = useRef('')
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
  return (
    <StyledChatBox ref={elemref} onMouseDown={dragHandler} className='chatBox'>
      <Close />
      <Fullscreen />
      <Minimize />
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
      <SendMessage />
    </StyledChatBox>
  )
}

export default ChatBox
