import {styledSendMessage} from './SendMessage.styles'

const SendMessage = () => {
  return (
    <styledSendMessage>
      <input type='text' placeholder='Write your message...' />
      <button>Send</button>
    </styledSendMessage>
  )
}

export default SendMessage
