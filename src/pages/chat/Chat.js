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
  let roomMessages = useSelector(
    (state) => state.rootReducer.chat?.[roomIndex].messages,
  )
  const rooms = useSelector((state) => state.rootReducer.chat)
  console.log(roomMessages)
  const themeChanger = () => {
    dispatch(toggleTheme())
  }
  // useEffect(() => {

  // }, [roomMessages])

  // console.log('rooms are: ', rooms)

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
                {rooms.map((r, index) => {
                  console.log('messages are:', r.messages)
                  if (r.room === 'public') {
                    //setRoomIndex(index)
                    r.messages.map((ch) => {
                      console.log('ch is:', ch)
                      if (ch.msg !== '') {
                        return <p key={uuidv4()}>hi</p>
                        {
                          /* {
                           <Message
                            own={false}
                            message={{
                              username: ch.sender,
                              text: ch.msg,
                              time: ch.dateTime,
                            }}
                          />
                        } */
                        }
                      }
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
