import {Female, Male, PropaneSharp} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'

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
    </StyledOnlineUser>
  )
}

export default OnlineUser
