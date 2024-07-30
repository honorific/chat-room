import React from 'react'
import {StyledChatBox} from './ChatBox.styles'
import {Close, Fullscreen, Minimize} from '@mui/icons-material'

const ChatBox = () => {
  return (
    <StyledChatBox>
      <Close />
      <Fullscreen />
      <Minimize />
      <div></div>
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
    </StyledChatBox>
  )
}

export default ChatBox
