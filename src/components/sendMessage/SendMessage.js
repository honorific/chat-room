import {StyledSendMessage} from './SendMessage.styles'

const SendMessage = ({destination}) => {

  const newMessageHandler = (destination) => {
    
  }
  return (
    <StyledSendMessage onSubmit={newMessageHandler}>
      <input type='text' placeholder='Write your message...' />
      <button>Send</button>
    </StyledSendMessage>
  )
}

export default SendMessage
