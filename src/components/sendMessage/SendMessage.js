import {StyledSendMessage} from './SendMessage.styles'
import {useDispatch} from 'react-redux'
import {addChat} from '../../utils/slices/chat'
import {useState} from 'react'
const SendMessage = ({destination}) => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const newMessageHandler = (e) => {
    e.preventDefault()
    console.log(destination)
    dispatch(
      addChat({
        sender: 'ali',
        receiver: 'public',
        room: 'public',
        dateTime: Date.now(),
        msg: message,
      }),
    )
  }
  return (
    <StyledSendMessage onSubmit={newMessageHandler}>
      <input
        type='text'
        placeholder='Write your message...'
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>Send</button>
    </StyledSendMessage>
  )
}

export default SendMessage
