import {StyledMessage} from './Message.styles'

const Message = ({own, message}) => {
  return (
    <StyledMessage>
      <span></span>
      <div>{message}</div>
    </StyledMessage>
  )
}

export default Message
