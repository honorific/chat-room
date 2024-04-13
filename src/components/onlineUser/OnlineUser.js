import {Female, Male} from '@mui/icons-material'
import StyledOnlineUser from './OnlineUser.styles'

const OnlineUser = ({gender, username}) => {
  return (
    <StyledOnlineUser>
      {gender === 'male' ? <Male /> : <Female />}
      {username}
    </StyledOnlineUser>
  )
}

export default OnlineUser
