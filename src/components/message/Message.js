import {StyledMessage} from './Message.styles'

const Message = ({own, message}) => {
  return (
    <StyledMessage sty={own}>
      {own !== true ? <span>{message.username}:</span> : ''}
      <p>{message.text}</p>
    </StyledMessage>
  )
}

export default Message
