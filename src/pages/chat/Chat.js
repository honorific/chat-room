import {lazy, Suspense, useEffect, useState} from 'react'
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
  const [roomIndex, setRoomIndex] = useState(0)
  const roomMessages = useSelector(
    (state) => state.rootReducer.chat?.[roomIndex].messages,
  )
  const rooms = useSelector((state) => state.rootReducer.chat)
  console.log(roomMessages)
  const themeChanger = () => {
    dispatch(toggleTheme())
  }
  console.log('rooms are: ', rooms)

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
              return (
                <Suspense key={uuidv4()}>
                  <ChatBox chatWith={r.room} />
                </Suspense>
              )
            }
          })}
          <div className='main'>
            <div className='mainScroller'>
              <div>
                {rooms.forEach((r, index) => {
                  if (r.room === 'public') {
                    setRoomIndex(index)
                    r.messages.map((ch) => {
                      return (
                        <Message
                          own={true}
                          message={{
                            username: ch.sender,
                            text: ch.msg,
                            time: ch.dateTime,
                          }}
                        />
                      )
                    })
                  }
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
