import {Female, Male} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'
import OnlineUserOptions from '../onlineUserOptions/OnlineUserOptions'
import {useState} from 'react'

const OnlineUser = ({gender, username, chatting}) => {
  const [show, setShow] = useState(false)
  const [cords, setCords] = useState([0, 0])
  return (
    <StyledOnlineUser
      sty={{chatting}}
      onClick={(e) => {
        setShow(!show)
        setCords([e.pageX, e.pageY])
      }}
    >
      <div>
        {gender === 'male' ? (
          <Male sx={{color: 'blueviolet'}} />
        ) : (
          <Female sx={{color: 'pink'}} />
        )}
        {username}
      </div>
      {chatting && <span>{chatting.number ? chatting.number : ''}</span>}
      <OnlineUserOptions show={show} coordinates={cords} />
    </StyledOnlineUser>
  )
}

export default OnlineUser
