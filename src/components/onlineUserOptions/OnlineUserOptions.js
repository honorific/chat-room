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

  const closeMenuHandler = (e) => {
    e.stopPropagation()
    // dispatch(resetChatOpen())
    console.log('you closed me')
  }

  const newWindowHandler = (e) => {
    e.stopPropagation()
    console.log('you clicked new window')
    // dispatch(addChat({
    //     sender: cookies.get('loggedInAs'),
    //     receiver: username,
    //     room: username,
    //     dateTime: Date.now(),
    //     msg: 'hi',
    //   }),
    // )
  }

  const newChatHandler = (e) => {
    e.stopPropagation()
    dispatch(resetChatOpen())
    console.log('newChat')
  }

  return (
    <StyledOnlineUserOptions
      show={show}
      coordinates={coordinates}
      onClick={(e) => e.stopPropagation()}
    >
      <Close onClick={closeMenuHandler} fontSize='lg' />
      <li onClick={direct}>
        chat with <i>{username}</i> in private
      </li>
      <li onClick={inWindow}>chat in new window</li>
    </StyledOnlineUserOptions>
  )
}

export default OnlineUserOptions
