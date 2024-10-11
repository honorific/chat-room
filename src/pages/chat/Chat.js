import {lazy, useEffect} from 'react'
import Message from '../../components/message/Message'
import Rightbar from '../../components/rightbar/Rightbar'
import SendMessage from '../../components/sendMessage/SendMessage'
import {StyledChat} from './Chat.styles'
import {useDispatch, useSelector} from 'react-redux'
import {toggleTheme} from '../../utils/slices/theme.js'
import cookies from '../../utils/slices/cookies.js'
import {Navigate} from 'react-router-dom'
const ChatBox = lazy(() => import('../../components/chatBox/ChatBox.js'))

const Chat = () => {
  const dispatch = useDispatch()
  const roomMessages = useSelector(
    (state) => state.rootReducer.chat?.[0].messages,
  )
  console.log(roomMessages)
  const themeChanger = () => {
    dispatch(toggleTheme())
  }

  // useEffect(() => {

  // }, [roomMessages?.[0].messages])

  return (
    <>
      {!cookies.get('loggedInAs') ? (
        <Navigate to='/login' />
      ) : (
        <StyledChat>
          <div className='rightbarContainer'>
            <Rightbar />
          </div>
          <ChatBox />
          <div className='main'>
            <div className='mainScroller'>
              <div>
                {/* {roomMessages.map((rm) => {
              {
                console.log('rm is: ', rm)
              }
              if (rm.room === 'public') {
                rm.messages.map((m) => {
                  return (
                    <Message
                      own={m.sender === 'ali'}
                      message={{
                        username: m.sender,
                        text: m.msg,
                        time: m.dateTime,
                      }}
                    />
                  )
                })
              }
            })} */}
                {roomMessages.map((rm) => {
                  return (
                    <Message
                      own={true}
                      message={{
                        username: rm.sender,
                        text: rm.msg,
                        time: '1 min ago',
                      }}
                    />
                  )
                })}
                {/* <Message
              own={true}
              message={{username: 'ali', text: 'hello', time: '1 min ago'}}
            /> */}
                <button onClick={themeChanger}>toggle</button>
              </div>
            </div>
            <SendMessage destination='public' />
          </div>
        </StyledChat>
      )}
    </>
  )
}

export default Chat
