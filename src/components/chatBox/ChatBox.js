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
    </StyledChatBox>
  )
}

export default ChatBox
