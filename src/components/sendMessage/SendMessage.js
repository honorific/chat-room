import {StyledSendMessage} from './SendMessage.styles'
import {useDispatch} from 'react-redux'
import {addChat} from '../../utils/slices/chat'
import {forwardRef, useState} from 'react'

const SendMessage = forwardRef(function SendMessage(
  {destination},
  sendMessageRef,
) {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const newMessageHandler = (e) => {
    e.preventDefault()
    console.log(destination)
    dispatch(
      addChat({
        sender: 'ali',
        receiver: 'public',
        room: destination,
        dateTime: Date.now(),
        msg: message,
      }),
    )
  }
  return (
    <StyledSendMessage onSubmit={newMessageHandler} ref={sendMessageRef}>
      <input
        type='text'
        placeholder='Write your message...'
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>Send</button>
    </StyledSendMessage>
  )
})

export default SendMessage
