import {StyledOnlineUserOptions} from './OnlineUserOptions.styles'
const OnlineUserOptions = ({show, coordinates}) => {
  return (
    <StyledOnlineUserOptions show={show} coordinates={coordinates}>
      <li>chat in private</li>
      <li>chat in new window</li>
    </StyledOnlineUserOptions>
  )
}

export default OnlineUserOptions
