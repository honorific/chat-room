import {Close} from '@mui/icons-material'
import {StyledOnlineUserOptions} from './OnlineUserOptions.styles'
import {useDispatch, useSelector} from 'react-redux'
import {resetChatOpen, addChatBox, addZindex} from '../../utils/slices/general'
import cookies from '../../utils/slices/cookies'
import {addChat} from '../../utils/slices/chat'

const OnlineUserOptions = ({show, coordinates, username, direct, inWindow}) => {
  const dispatch = useDispatch()
  const globalShow = useSelector(
    (state) => state.rootReducer.general.chatMenuOpen,
  )
  const zIndex = useSelector((state) => state.rootReducer.general.zIndex)

  return (
    <StyledOnlineUserOptions
      show={show}
      coordinates={coordinates}
      onClick={(e) => e.stopPropagation()}
    >
      <Close fontSize='lg' />
      <li onClick={direct}>
        chat with <i>{username}</i> in private
      </li>
      <li onClick={inWindow}>chat in new window</li>
    </StyledOnlineUserOptions>
  )
}

export default OnlineUserOptions
