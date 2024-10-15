import {Female, Male} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'
import OnlineUserOptions from '../onlineUserOptions/OnlineUserOptions'
import {
  addChatBox,
  addChatopen,
  addZindex,
  closeAllChatMenus,
  resetChatOpen,
} from '../../utils/slices/general'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useRef, useEffect} from 'react'
import {sortByCordY, sortArrayOfUsers} from '../../utils/slices/users'
import {addChat} from '../../utils/slices/chat'
import cookies from '../../utils/slices/cookies'

const OnlineUser = ({gender, username, chatting, selector}) => {
  const [cords, setCords] = useState([0, 0])
  const [elemWidth, setElemWidth] = useState(0)
  const listHeightRef = useRef(0)
  const elemref = useRef('')
  const dispatch = useDispatch()
  const globalShow = useSelector(
    (state) => state.rootReducer.general.chatMenuOpen,
  )
  const users = useSelector((state) => state.rootReducer.users.users)

  useEffect(() => {
    if (elemref.current !== '') {
      setElemWidth(elemref.current.offsetWidth)
      listHeightRef.current = document
        .querySelector('.onlineUsers')
        .getBoundingClientRect().height
    }
  }, [elemref.current, listHeightRef.current])

  const clickHandler = (e) => {
    e.stopPropagation()
    dispatch(resetChatOpen())
    dispatch(addChatopen({id: selector, show: true, username}))
    globalShow.map((gs) => {
      if (gs.id === selector) {
        dispatch(resetChatOpen({id: selector, show: true, username}))
      }
    })
    const rect = e.target.getBoundingClientRect()
    setCords([rect.left, rect.top])
  }
  let oldY = 0
  const dragHandler = (e) => {
    let listArr = [44, 88, 132, 176, 220]

    const mouseMoveHandler = (el) => {
      if (el.buttons === 1) {
        let elIndex
        for (let j = 0; j < users.length; j++) {
          if (users[j].username === elemref.current.innerText) {
            elIndex = j
            console.log('index of dragged elem', j)
            break
          }
        }
        oldY = el.clientY
      }
    }
    const mouseUpHandler = (elm) => {
      dispatch(closeAllChatMenus())
      users.forEach((u, i) => {
        document.querySelector(
          `.onlineUsers li:nth-child(${i + 1})`,
        ).style.boxShadow = 'none'
      })
      document.removeEventListener('mousedown', dragHandler)
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
      document.addEventListener('click', clickHandler)
    }
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }
  const directHandler = () => {
    dispatch(addZindex())
    dispatch(resetChatOpen())
    dispatch(
      addChat({
        sender: cookies.get('loggedInAs'),
        receiver: username,
        room: username,
        dateTime: Date.now(),
        msg: 'hi',
      }),
    )
  }

  const inWindowHandler = () => {
    console.log('inWindow')
  }

  return (
    <StyledOnlineUser
      sty={{chatting}}
      onClick={clickHandler}
      //onMouseDown={dragHandler}
      data-id={selector}
      ref={elemref}
    >
      <div>
        {gender === 'male' ? (
          <Male sx={{color: 'blueviolet'}} />
        ) : (
          <Female sx={{color: 'pink'}} />
        )}
        {username}
      </div>
      {chatting && <span>{chatting.number ? chatting.number : ''}</span>}
      {globalShow[globalShow.length - 1]?.show === true && (
        <OnlineUserOptions
          show={
            globalShow[globalShow.length - 1]?.id === selector &&
            globalShow[globalShow.length - 1]?.show === true
          }
          coordinates={cords}
          username={username}
          direct={directHandler}
          inWindow={inWindowHandler}
        />
      )}
    </StyledOnlineUser>
  )
}

export default OnlineUser
