import {Close} from '@mui/icons-material'
import {StyledOnlineUserOptions} from './OnlineUserOptions.styles'
import {useDispatch, useSelector} from 'react-redux'

const OnlineUserOptions = ({
  show,
  coordinates,
  username,
  direct,
  close,
  inWindow,
}) => {
  return (
    <StyledOnlineUserOptions
      show={show}
      coordinates={coordinates}
      onClick={(e) => e.stopPropagation()}
    >
      <Close fontSize='lg' onClick={close} />
      <li onClick={direct}>
        chat with <i>{username}</i> in private
      </li>
      <li onClick={inWindow}>chat in new window</li>
    </StyledOnlineUserOptions>
  )
}

export default OnlineUserOptions
