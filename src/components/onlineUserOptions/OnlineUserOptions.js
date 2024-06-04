import {Close} from '@mui/icons-material'
import {StyledOnlineUserOptions} from './OnlineUserOptions.styles'
import {useDispatch} from 'react-redux'
import {resetChatOpen} from '../../utils/slices/general'
const OnlineUserOptions = ({show, coordinates, username}) => {
  const dispatch = useDispatch()

  const closeMenuHandler = (e) => {
    e.stopPropagation()
    dispatch(resetChatOpen())
  }

  const newWindowHandler = (e) => {
    e.stopPropagation()
    dispatch(resetChatOpen())
  }

  const newChatHandler = (e) => {
    e.stopPropagation()
    dispatch(resetChatOpen())
  }

  return (
    <StyledOnlineUserOptions
      show={show}
      coordinates={coordinates}
      onClick={(e) => e.stopPropagation()}
    >
      <Close onClick={closeMenuHandler} fontSize='lg' />
      <li onClick={newWindowHandler}>
        chat with <i>{username}</i> in private
      </li>
      <li onClick={newChatHandler}>chat in new window</li>
    </StyledOnlineUserOptions>
  )
}

export default OnlineUserOptions
