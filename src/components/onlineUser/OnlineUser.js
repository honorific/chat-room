import {Female, Male} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'
import OnlineUserOptions from '../onlineUserOptions/OnlineUserOptions'
import {
  addChatopen,
  closeAllChatMenus,
  resetChatOpen,
} from '../../utils/slices/general'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useRef, useEffect, useCallback} from 'react'

const OnlineUser = ({gender, username, chatting, selector}) => {
  const [cords, setCords] = useState([0, 0])
  const elem = useRef('')
  const [mouseIsDown, setMouseIsDown] = useState('false')
  const dispatch = useDispatch()
  let globalShow = useSelector(
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
    dispatch(closeAllChatMenus())
    setMouseIsDown(true)
    document.addEventListener('mousemove', function (el) {
      if (el.buttons === 1) {
        elem.current.style.position = 'absolute'
        elem.current.style.zIndex = '1000'
        elem.current.style.top = `${el.clientY}px`
        elem.current.style.left = `${el.clientX}px`
      }
    })
    if (e.buttons === 1) {
      document.addEventListener('mouseup', function (elm) {
        dispatch(closeAllChatMenus())
        elem.current.style.top = `${cords[0]}px`
        elem.current.style.left = `${cords[1]}px`
        console.log('mouse up')
        setMouseIsDown(false)
      })
    }
    console.log('e is:', e)
    console.log(e.clientX)
  }

  return (
    <StyledOnlineUser
      sty={{chatting}}
      onClick={clickHandler}
      onMouseDown={dragHandler}
      ref={elem}
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
