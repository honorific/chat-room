import {Female, Male} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'
import OnlineUserOptions from '../onlineUserOptions/OnlineUserOptions'

const OnlineUser = ({gender, username, chatting}) => {
  return (
    <StyledOnlineUser sty={{chatting}}>
      <div>
        {gender === 'male' ? (
          <Male sx={{color: 'blueviolet'}} />
        ) : (
          <Female sx={{color: 'pink'}} />
        )}
        {username}
      </div>
      {chatting && <span>{chatting.number ? chatting.number : ''}</span>}
      <OnlineUserOptions show={true} />
    </StyledOnlineUser>
  )
}

export default OnlineUser
