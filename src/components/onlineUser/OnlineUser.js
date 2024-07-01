import {Female, Male} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'
import OnlineUserOptions from '../onlineUserOptions/OnlineUserOptions'
import {
  addChatopen,
  closeAllChatMenus,
  resetChatOpen,
} from '../../utils/slices/general'
import {useSelector, useDispatch} from 'react-redux'
import {useState, useRef, useEffect} from 'react'
import {
  addUserWithCords,
  changeCordY,
  resetUsersAndCords,
} from '../../utils/slices/users'

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
  const usersAndCords = useSelector(
    (state) => state.rootReducer.users.usersAndCords,
  )

  useEffect(() => {
    if (elemref.current !== '') {
      setElemWidth(elemref.current.offsetWidth)
      console.log('elemWidth is: ', elemWidth)
      listHeightRef.current = document
        .querySelector('.onlineUsers')
        .getBoundingClientRect().height

      console.log('listheightRef: ', listHeightRef.current)
    }
  }, [elemref.current, listHeightRef.current])

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
    document.removeEventListener('click', clickHandler)
    document.querySelector(
      '.onlineUsers',
    ).style.height = `${listHeightRef.current}px`
    dispatch(resetUsersAndCords())
    users.forEach((user, i) => {
      console.log('i is: ', i)
      dispatch(
        addUserWithCords({
          gender: user.gender,
          username: user.username,
          ...(user.chatting && {chatting: user.chatting}),
          cordY: document
            .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
            .getBoundingClientRect().top,
        }),
      )
    })
    const mouseMoveHandler = (el) => {
      if (el.buttons === 1) {
        elemref.current.style.position = 'absolute'
        elemref.current.style.zIndex = '1000'
        elemref.current.style.top = `${el.clientY}px`
        elemref.current.style.left = `${el.clientX}px`
        elemref.current.style.width = `${elemWidth - 10}px`
        elemref.current.style.boxShadow = '-9px 4px 20px 3px rgba(0, 0, 0, 0.1)'
        usersAndCords.forEach((u, i) => {
          if (el.clientY >= u.cordY) {
            if (
              document
                .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
                .getBoundingClientRect().top > 55
            ) {
              document.querySelector(
                `.onlineUsers li:nth-child(${i + 1})`,
              ).style.transform = `translateY(-${34}px)`
              dispatch(
                changeCordY({index: i, value: usersAndCords[i].cordY - 34}),
              )
            } else {
              document.querySelector(
                `.onlineUsers li:nth-child(${i + 1})`,
              ).style.transform = `translateY(${0}px)`
            }
          }
          if (el.clientY < u.cordY) {
            document.querySelector(
              `.onlineUsers li:nth-child(${i + 1})`,
            ).style.transform = `translateY(${34}px)`
            dispatch(
              changeCordY({index: i, value: usersAndCords[i].cordY + 34}),
            )
          }
        })
      }
    }
    const mouseUpHandler = (elm) => {
      dispatch(closeAllChatMenus())
      //elemref.current.style.position = 'static'
      elemref.current.style.boxShadow = 'none'
      elemref.current.style.top = elm.clientY
      elemref.current.style.left = '960.5px'
      console.log(
        'ul height is: ',
        document.querySelector('.onlineUsers').getBoundingClientRect().height,
      )
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
