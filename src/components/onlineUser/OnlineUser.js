import {Female, Male} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'
import OnlineUserOptions from '../onlineUserOptions/OnlineUserOptions'
import {
  addChatopen,
  closeAllChatMenus,
  resetChatOpen,
} from '../../utils/slices/general'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'

const OnlineUser = ({gender, username, chatting, selector}) => {
  const [cords, setCords] = useState([0, 0])

  const dispatch = useDispatch()
  let globalShow = useSelector((state) => state.general.chatMenuOpen)

  const clickHandler = (e) => {
    dispatch(closeAllChatMenus())
    dispatch(addChatopen({id: selector, show: true}))
    globalShow.map((gs) => {
      if (gs.id === selector) {
        dispatch(resetChatOpen({id: selector, show: true}))
      }
    })
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
