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
import {sortByCordY, sortArrayOfUsers} from '../../utils/slices/users'

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
  let oldY = 0
  const dragHandler = (e) => {
    //document.removeEventListener('click', clickHandler)
    let listArr = [44, 88, 132, 176, 220]
    // document.querySelector(
    //   '.onlineUsers',
    // ).style.height = `${listHeightRef.current}px`
    // users.forEach((u, i) => {
    //   document.querySelector(
    //     `.onlineUsers li:nth-child(${i + 1})`,
    //   ).style.position = 'absolute'
    //   document.querySelector(
    //     `.onlineUsers li:nth-child(${i + 1})`,
    //   ).style.width = `${elemWidth - 10}px`
    //   document.querySelector(
    //     `.onlineUsers li:nth-child(${i + 1})`,
    //   ).style.top = `${listArr[i]}px`
    // })

    const mouseMoveHandler = (el) => {
      if (el.buttons === 1) {
        // elemref.current.style.position = 'absolute'
        //elemref.current.style.zIndex = '1000'
        //elemref.current.style.left = `${el.clientX}px`
        // elemref.current.style.width = `${elemWidth - 10}px`
        // elemref.current.style.boxShadow = '-9px 4px 20px 3px rgba(0, 0, 0, 0.1)'
        let elIndex
        for (let j = 0; j < users.length; j++) {
          if (users[j].username === elemref.current.innerText) {
            elIndex = j
            console.log('index of dragged elem', j)
            break
          }
        }
        // users.forEach((u, i) => {
        //   if (
        //     el.clientY >
        //       document
        //         .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //         .getBoundingClientRect().top &&
        //     el.clientY > oldY &&
        //     el.clientY <= 240 &&
        //     el.movementY >= 1
        //     // &&
        //     // i + 1 ===
        //     //   Math.floor(
        //     //     document
        //     //       .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //     //       .getBoundingClientRect().top / 44,
        //     //   )
        //   ) {
        //     if (i !== 0) {
        //       document
        //         .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //         .style.top.match(/\d+/)[0] != listArr[i]
        //         ? (document.querySelector(
        //             `.onlineUsers li:nth-child(${i + 1})`,
        //           ).style.top = `${listArr[i]}px`)
        //         : (document.querySelector(
        //             `.onlineUsers li:nth-child(${i + 1})`,
        //           ).style.top = `${listArr[i - 1]}px`)
        //       console.log(
        //         'top is: ',
        //         document
        //           .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //           .style.top.match(/\d+/)[0],
        //       )
        //       // dispatch(sortArrayOfUsers([elIndex, i]))
        //     } else {
        //       document.querySelector(
        //         `.onlineUsers li:nth-child(${i + 1})`,
        //       ).style.top = `${listArr[i]}px`
        //       //  dispatch(sortArrayOfUsers([elIndex, i]))
        //     }
        //   }
        //   if (
        //     el.clientY <
        //       document
        //         .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //         .getBoundingClientRect().top &&
        //     el.clientY < oldY &&
        //     el.movementY <= -1
        //   ) {
        //     if (i !== 4) {
        //       document.querySelector(
        //         `.onlineUsers li:nth-child(${i + 1})`,
        //       ).style.top =
        //         document
        //           .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //           .style.top.match(/\d+/)[0] != listArr[i]
        //           ? `${listArr[i]}px`
        //           : `${listArr[i + 1]}px`
        //       console.log(
        //         'top is: ',
        //         document
        //           .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //           .style.top.match(/\d+/)[0],
        //       )
        //       //dispatch(sortArrayOfUsers([elIndex, i]))
        //     } else {
        //       document.querySelector(
        //         `.onlineUsers li:nth-child(${i + 1})`,
        //       ).style.top = `${listArr[i]}px`
        //       // dispatch(sortArrayOfUsers([elIndex, i]))
        //     }
        //   }
        //   elemref.current.style.top = `${el.clientY}px`
        // })
        // let elIndex
        // for (let j = 0; j < users.length; j++) {
        //   if (users[j].username === elemref.current.innerText) {
        //     elIndex = j
        //     console.log('index of dragged elem', j)
        //     break
        //   }
        // }
        // users.forEach((u, i) => {
        //   if (
        //     el.clientY >
        //     document
        //       .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //       .getBoundingClientRect().top
        //     //     &&
        //     // document
        //     //   .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //     //   .getBoundingClientRect().top /
        //     //   44 ===
        //     //   i + 1
        //   ) {
        //     dispatch(sortArrayOfUsers([elIndex, i]))
        //   }
        //   if (
        //     el.clientY <
        //     document
        //       .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //       .getBoundingClientRect().top
        //     //     &&
        //     // document
        //     //   .querySelector(`.onlineUsers li:nth-child(${i + 1})`)
        //     //   .getBoundingClientRect().top /
        //     //   44 ===
        //     //   i + 1
        //   ) {
        //     dispatch(sortArrayOfUsers([elIndex, i]))
        //   }
        // })
        // elemref.current.style.top = `${el.clientY}px`
        oldY = el.clientY
      }
    }
    const mouseUpHandler = (elm) => {
      dispatch(closeAllChatMenus())
      dispatch(sortByCordY())
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
