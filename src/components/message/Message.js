import {StyledMessage} from './Message.styles'

const Message = ({own, message, last}) => {
  return (
    <StyledMessage sty={own}>
      {own !== true ? <span>{message.username}:</span> : ''}
      <div className='timeContainer'>
        <p>{message.text}</p>
        {last === true && <time>{message.time}</time>}
      </div>
    </StyledMessage>
  )
}

export default Message
