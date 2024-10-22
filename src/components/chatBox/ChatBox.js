import {useRef, useState} from 'react'
import {StyledChatBox} from './ChatBox.styles'
import {Close, Fullscreen, Minimize} from '@mui/icons-material'
import Message from '../message/Message'
import SendMessage from '../sendMessage/SendMessage'
import {useDispatch, useSelector} from 'react-redux'
import {changeChatCords} from '../../utils/slices/chat'

const ChatBox = ({chatWith, cords}) => {
  const elemref = useRef('')
  const rooms = useSelector((state) => state.rootReducer.chat)
  const dispatch = useDispatch()
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
    elemref.current.addEventListener('mousemove', mouseMoveHandler)
    elemref.current.addEventListener('mouseup', () => {
      let indexOfChat = 0
      elemref.current.removeEventListener('mousemove', mouseMoveHandler)
      rooms.forEach((r, index) => {
        if (r.room === chatWith) {
          indexOfChat = index
        }
      })
      console.log('indexOfChat is: ', indexOfChat)
      dispatch(
        changeChatCords({
          index: indexOfChat,
          top: elemref.current.style.top.replace(/^\D+/g, ''),
          left: elemref.current.style.left.replace(/^\D+/g, ''),
        }),
      )
    })
  }

  const minimizeHandler = () => {
    elemref.current.children[4].style.height = minimized ? '0px' : '300px'
    sendMessageRef.current.style.visibility = minimized ? 'hidden' : 'visible'
    setMinimized(!minimized)
  }
  return (
    <StyledChatBox
      ref={elemref}
      onMouseDown={dragHandler}
      className='chatBox'
      cords={cords}
    >
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
