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
  sortByCordY,
} from '../../utils/slices/users'

const OnlineUser = ({gender, username, chatting, selector}) => {
  const [cords, setCords] = useState([0, 0])
  const [elemWidth, setElemWidth] = useState(0)
  const [freeSpaceChecker, setFreeSpaceChecker] = useState(false)
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
      listHeightRef.current = document
        .querySelector('.onlineUsers')
        .getBoundingClientRect().height
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
    let listArr = [220, 176, 132, 88, 44]
    document.querySelector(
      '.onlineUsers',
    ).style.height = `${listHeightRef.current}px`
    dispatch(resetUsersAndCords())
    users.forEach((user, i) => {
      dispatch(
        addUserWithCords({
          gender: user.gender,
          username: user.username,
          ...(user.chatting && {chatting: user.chatting}),
          cordY: (i + 1) * 44,
        }),
      )
    })
    const mouseMoveHandler = (el) => {
      if (el.buttons === 1) {
        elemref.current.style.position = 'absolute'
        elemref.current.style.zIndex = '1000'
        elemref.current.style.left = `${el.clientX}px`
        elemref.current.style.width = `${elemWidth - 10}px`
        elemref.current.style.boxShadow = '-9px 4px 20px 3px rgba(0, 0, 0, 0.1)'
        usersAndCords.forEach((u, i) => {
          document.querySelector(
            `.onlineUsers li:nth-child(${i + 1})`,
          ).style.position = 'absolute'
          document.querySelector(
            `.onlineUsers li:nth-child(${i + 1})`,
          ).style.width = `${elemWidth - 10}px`
          document.querySelector(
            `.onlineUsers li:nth-child(${i + 1})`,
          ).style.top = `${usersAndCords[i].cordY}px`
          if (el.clientY >= u.cordY) {
            if (
              document
                .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
                .getBoundingClientRect().top > 55
            ) {
              if (u.cordY - 44 > 55 && i > 0) {
                dispatch(
                  changeCordY({
                    index: i,
                    value: listArr[i - 1],
                  }),
                )
                // let cordYChecker = false
                // usersAndCords.forEach((usr) => {
                //   if (usr.cordY === u.cordY) cordYChecker = true
                // })
                // if (!cordYChecker) {
                document.querySelector(
                  `.onlineUsers li:nth-child(${i + 1})`,
                ).style.top = `${u.cordY}px`
                // }
              }
            }
          }
          if (el.clientY <= u.cordY) {
            if (
              document
                .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
                .getBoundingClientRect().top < listHeightRef.current &&
              u.cordY > listHeightRef.current
            ) {
              if (u.cordY + 44 < listHeightRef.current && i < 5) {
                dispatch(
                  changeCordY({
                    index: i,
                    value: listArr[i] !== u.cordY ? listArr[i + 1] : listArr[i],
                  }),
                )
                let cordYChecker = false
                usersAndCords.forEach((usr) => {
                  if (usr.cordY === u.cordY) cordYChecker = true
                })
                //if (!cordYChecker) {
                document.querySelector(
                  `.onlineUsers li:nth-child(${i + 1})`,
                ).style.top = `${u.cordY}px`
                // }

                // `${i > 1 ? listArr[i + 1] : listArr[i]}px`
              }
            }
          }
        })
      }
      elemref.current.style.top = `${el.clientY}px`
    }
    const mouseUpHandler = (elm) => {
      dispatch(closeAllChatMenus())
      dispatch(sortByCordY())
      //elemref.current.style.position = 'static'
      usersAndCords.forEach((u, i) => {
        document.querySelector(
          `.onlineUsers li:nth-child(${i + 1})`,
        ).style.boxShadow = 'none'
        document.querySelector(
          `.onlineUsers li:nth-child(${i + 1})`,
        ).style.top = `${u.cordY}px`
        document.querySelector(
          `.onlineUsers li:nth-child(${i + 1})`,
        ).style.left = '960.5px'
      })
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
