import {Close} from '@mui/icons-material'
import {StyledOnlineUserOptions} from './OnlineUserOptions.styles'
const OnlineUserOptions = ({show, coordinates}) => {
  return (
    <StyledOnlineUserOptions show={show} coordinates={coordinates}>
      <Close />
      <li>chat in private</li>
      <li>chat in new window</li>
    </StyledOnlineUserOptions>
  )
}

export default OnlineUserOptions
