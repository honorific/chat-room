import {StyledMessage} from './Message.styles'

const Message = ({own, message, last = false, dm = false}) => {
  return (
    <StyledMessage sty={own} dm={dm}>
      {own !== true && message.username ? <span>{message.username}:</span> : ''}
      <div className='timeContainer'>
        <p>{message.text}</p>
        {(last === true || dm === true) && <time>{message.time}</time>}
      </div>
    </StyledMessage>
  )
}

export default Message
