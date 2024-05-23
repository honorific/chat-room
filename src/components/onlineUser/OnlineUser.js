import {Female, Male} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'
import OnlineUserOptions from '../onlineUserOptions/OnlineUserOptions'
import {
  addChatopen,
  closeAllChatMenus,
  closeChatMenuOpen,
  openChatMenuOpen,
  resetChatOpen,
  setOpenner,
} from '../../utils/slices/general'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'

const OnlineUser = ({gender, username, chatting, selector}) => {
  const [cords, setCords] = useState([0, 0])
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()
  let globalShow = useSelector((state) => state.general.chatMenuOpen)
  let openner = useSelector((state) => state.general.openner)

  const clickHandler = (e) => {
    setShow(false)
    let founder = false
    dispatch(closeAllChatMenus())
    dispatch(addChatopen({id: selector, show: true}))
    globalShow.map((gs) => {
      if (gs.id == selector) {
        dispatch(resetChatOpen({id: selector, show: true}))
      }
    })

    console.log(globalShow)
    const rect = e.target.getBoundingClientRect()
    setCords([rect.left, rect.top])
  }

  return (
    <StyledOnlineUser sty={{chatting}} onClick={clickHandler}>
      <div>
        {gender === 'male' ? (
          <Male sx={{color: 'blueviolet'}} />
        ) : (
          <Female sx={{color: 'pink'}} />
        )}
        {username}
      </div>
      {chatting && <span>{chatting.number ? chatting.number : ''}</span>}
      <OnlineUserOptions
        show={
          globalShow[globalShow.length - 1]?.id === selector &&
          globalShow[globalShow.length - 1]?.show === true
        }
        coordinates={cords}
      />
    </StyledOnlineUser>
  )
}

export default OnlineUser
