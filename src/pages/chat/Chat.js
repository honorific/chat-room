import {lazy, useEffect} from 'react'
import Message from '../../components/message/Message'
import Rightbar from '../../components/rightbar/Rightbar'
import SendMessage from '../../components/sendMessage/SendMessage'
import {StyledChat} from './Chat.styles'
import {useDispatch, useSelector} from 'react-redux'
import {toggleTheme} from '../../utils/slices/theme.js'
import cookies from '../../utils/slices/cookies.js'
import {Navigate} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
const ChatBox = lazy(() => import('../../components/chatBox/ChatBox.js'))

const Chat = () => {
  const dispatch = useDispatch()
  const roomMessages = useSelector(
    (state) => state.rootReducer.chat?.[0].messages,
  )
  const rooms = useSelector((state) => state.rootReducer.chat)
  console.log(roomMessages)
  const themeChanger = () => {
    dispatch(toggleTheme())
  }

  return (
    <>
      {!cookies.get('loggedInAs') ? (
        <Navigate to='/login' />
      ) : (
        <StyledChat>
          <div className='rightbarContainer'>
            <Rightbar />
          </div>
          {rooms.map((r) => {
            if (r.room && r.room !== 'public') {
              return <ChatBox />
            }
          })}
          <div className='main'>
            <div className='mainScroller'>
              <div>
                {roomMessages.map((rm) => {
                  return (
                    <Message
                      own={true}
                      message={{
                        username: rm.sender,
                        text: rm.msg,
                        time: '1 min ago',
                      }}
                      key={uuidv4()}
                    />
                  )
                })}
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
