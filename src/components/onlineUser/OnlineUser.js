import {Female, Male} from '@mui/icons-material'
import {StyledOnlineUser} from './OnlineUser.styles'
import OnlineUserOptions from '../onlineUserOptions/OnlineUserOptions'
import {setChatMenuOpen} from '../../utils/slices/general'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'

const OnlineUser = ({gender, username, chatting}) => {
  const [cords, setCords] = useState([0, 0])
  const show = useSelector((state) => state.general.chatMenuOpen)
  const dispatch = useDispatch()

  const clickHandler = (e) => {
    dispatch(setChatMenuOpen())
    const rect = e.target.getBoundingClientRect()
    setCords([rect.left, rect.top])
    console.log(e)
  }

  return (
    <StyledOnlineUser sty={{chatting}} onClick={clickHandler}>
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
