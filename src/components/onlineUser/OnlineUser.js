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
  const elemRef = useRef('')
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
    e.stopPropagation()
    elemRef.current = e.target.dataset.id
    console.log(e.target)
    dispatch(closeAllChatMenus())

    document.addEventListener('mousemove', function (el) {
      if (el.target.dataset.id === elemRef.current || elemRef.current === '') {
        if (el.buttons === 1) {
          e.target.style.position = 'absolute'
          e.target.style.zIndex = '1000'
          e.target.style.top = `${el.clientY}px`
          e.target.style.left = `${el.clientX}px`
        }
      }
    })

    document.addEventListener('mouseup', function (elm) {
      dispatch(closeAllChatMenus())
      e.target.style.top = `${cords[0]}px`
      e.target.style.left = `${cords[1]}px`
      // elemRef.current.style.position = 'static'
      console.log('mouse up')
      console.log('elemRef', elemRef)
      e.preventDefault()
    })
  }

  return (
    <StyledOnlineUser
      sty={{chatting}}
      onClick={clickHandler}
      onMouseDown={dragHandler}
      data-id={selector}
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
