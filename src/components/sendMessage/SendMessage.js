import {StyledSendMessage} from './SendMessage.styles'

const SendMessage = () => {
  return (
    <StyledSendMessage>
      <input type='text' placeholder='Write your message...' />
      <button>Send</button>
    </StyledSendMessage>
  )
}

export default SendMessage
