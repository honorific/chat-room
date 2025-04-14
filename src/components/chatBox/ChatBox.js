import {useRef, useState} from 'react'
import {StyledChatBox} from './ChatBox.styles'
import {Close, Fullscreen, Minimize} from '@mui/icons-material'
import Message from '../message/Message'
import SendMessage from '../sendMessage/SendMessage'
import {useDispatch, useSelector} from 'react-redux'
import {changeChatCords, chatCloser} from '../../redux/slices/chat'
import {addZIndex} from '../../redux/slices/general'
import {removeActiveChatting} from '../../redux/slices/users'

const ChatBox = ({chatWith, cords, index}) => {
  const [fScreen, setFScreen] = useState(false)
  const elemref = useRef('')
  const rooms = useSelector((state) => state.rootReducer.chat)
  const zIndex = useSelector((state) => state.rootReducer.general.zIndex)
  const dispatch = useDispatch()
  const sendMessageRef = useRef('')
  const [minimized, setMinimized] = useState(true)
  const mouseUpHandler = () => {
    dispatch(addZIndex())
    elemref.current.style.zIndex = zIndex
    console.log('zindex is: ', elemref.current.style.zIndex)
  }
  const closeHandler = () => {
    elemref.current.style.visibility = 'hidden'
    dispatch(removeActiveChatting(chatWith))
    dispatch(chatCloser({index}))
  }
  const dragHandler = () => {
    dispatch(addZIndex())
    elemref.current.style.zIndex = zIndex
    elemref.current.style.zIndex = zIndex
    let dragChecker = false
    const mouseMoveHandler = (el) => {
      if (el.buttons === 1) {
        elemref.current.style.position = 'absolute'
        elemref.current.style.left = `${el.clientX - 200}px`
        elemref.current.style.top = `${el.clientY - 50}px`
        dragChecker = true
      }
    }
    elemref.current.addEventListener('mousemove', mouseMoveHandler)
    elemref.current.addEventListener('mouseup', () => {
      let indexOfChat = 0
      elemref?.current?.removeEventListener('mousemove', mouseMoveHandler)
      rooms.forEach((r, index) => {
        if (r.room === chatWith) {
          indexOfChat = index
        }
      })
      console.log('indexOfChat is: ', indexOfChat)
      dispatch(
        changeChatCords({
          index: indexOfChat,
          top: elemref.current
            ? Number(elemref.current.style.top.match(/\d+/)[0])
            : '100px',
          left: elemref.current
            ? Number(elemref.current.style.left.match(/\d+/)[0])
            : '100px',
        }),
      )
    })
  }

  const minimizeHandler = () => {
    elemref.current.children[4].style.height = minimized ? '0px' : '300px'
    sendMessageRef.current.style.visibility = minimized ? 'hidden' : 'visible'
    setMinimized(!minimized)
  }
  const fullScreenHandler = () => {
    elemref.current.style.height = fScreen
      ? '40px'
      : `calc(100vh - ${
          sendMessageRef.current.getBoundingClientRect().height
        }px )`
    elemref.current.children[4].style.height = fScreen
      ? '300px'
      : `calc(100vh - ${
          sendMessageRef.current.getBoundingClientRect().height
        }px )`
    setFScreen(!fScreen)

    console.log('fscreen is: ', fScreen)
  }
  return (
    <StyledChatBox
      ref={elemref}
      onMouseDown={dragHandler}
      onMouseUp={mouseUpHandler}
      className='chatBox'
      cords={cords}
      style={{top: cords.top, left: cords.left}}
      fscreen={fScreen}
    >
      <Close onClick={closeHandler} />
      <Fullscreen onClick={fullScreenHandler} />
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
