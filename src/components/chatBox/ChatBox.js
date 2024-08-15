import React from 'react'
import {StyledChatBox} from './ChatBox.styles'
import {Close, Fullscreen, Minimize} from '@mui/icons-material'
import Message from '../message/Message'
import SendMessage from '../sendMessage/SendMessage'

const ChatBox = () => {
  return (
    <StyledChatBox>
      <Close />
      <Fullscreen />
      <Minimize />
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
          last={true}
          dm={true}
        />
        <SendMessage />
      </div>
    </StyledChatBox>
  )
}

export default ChatBox
