import {Female, Male} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'
import OnlineUserOptions from '../onlineUserOptions/OnlineUserOptions'
import {
  addChatopen,
  closeAllChatMenus,
  resetChatOpen,
} from '../../utils/slices/general'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useRef} from 'react'

const OnlineUser = ({gender, username, chatting, selector}) => {
  const [cords, setCords] = useState([0, 0])
  const elemref = useRef('')
  const dispatch = useDispatch()
  const globalShow = useSelector(
    (state) => state.rootReducer.general.chatMenuOpen,
  )

  const clickHandler = (e) => {
    dispatch(closeAllChatMenus())
    dispatch(addChatopen({id: selector, show: true, username}))
    globalShow.map((gs) => {
      if (gs.id === selector) {
        dispatch(resetChatOpen({id: selector, show: true, username}))
      }
    })
    const rect = e.target.getBoundingClientRect()
    setCords([rect.left, rect.top])
  }

  const dragHandler = (e) => {
    elemref.current.removeEventListener('click', clickHandler)
    const mouseMoveHandler = (el) => {
      if (el.buttons === 1) {
        elemref.current.style.position = 'absolute'
        elemref.current.style.zIndex = '1000'
        elemref.current.style.top = `${el.clientY}px`
        elemref.current.style.left = `${el.clientX}px`
      }
    }
    const mouseUpHandler = (elm) => {
      dispatch(closeAllChatMenus())
      elemref.current.style.top = `${cords[0]}px`
      elemref.current.style.left = `${cords[1]}px`
      document.removeEventListener('mousedown', dragHandler)
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
    }
    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }

  return (
    <StyledOnlineUser
      sty={{chatting}}
      onClick={clickHandler}
      onMouseDown={dragHandler}
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
        />
      )}
    </StyledOnlineUser>
  )
}

export default OnlineUser
