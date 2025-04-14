import {lazy, Suspense, useEffect, useState} from 'react'
import Message from '../../components/message/Message'
import Rightbar from '../../components/rightbar/Rightbar'
import SendMessage from '../../components/sendMessage/SendMessage'
import {StyledChat} from './Chat.styles'
import {useDispatch, useSelector} from 'react-redux'
import {toggleTheme} from '../../redux/slices/theme.js'
import cookies from '../../utils/cookie/initialize.js'
import {Navigate} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
const ChatBox = lazy(() => import('../../components/chatBox/ChatBox.js'))

const Chat = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.rootReducer.users.users)
  const rooms = useSelector((state) => state.rootReducer.chat)
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
          {rooms.map((r, i) => {
            if (r.room && r.room !== 'public' && r.open === true) {
              return (
                <Suspense key={uuidv4()}>
                  <ChatBox
                    chatWith={r.room}
                    cords={{top: r.top, left: r.left}}
                    index={i}
                  />
                </Suspense>
              )
            }
          })}
          <div className='main'>
            <div className='mainScroller'>
              <div>
                {rooms.map((r) => {
                  if (r.room === 'public') {
                    return [
                      r.messages.map((ch) => {
                        console.log('ch is:', ch)
                        if (ch.msg !== '') {
                          {
                            return (
                              <Message
                                own={false}
                                message={{
                                  username: ch.sender,
                                  text: ch.msg,
                                  time: ch.dateTime,
                                }}
                              />
                            )
                          }
                        }
                      }),
                    ]
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
