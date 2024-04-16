import OnlineUser from '../onlineUser/OnlineUser'
import RoomTitle from '../roomTitle/RoomTitle'
import {StyledRightbar} from './Rightbar.styles'

const Rightbar = () => {
  return (
    <StyledRightbar>
      <div className='content'>
        <ul className='onlineUsers'>
          <OnlineUser gender='male' username='ali' />
          <OnlineUser gender='female' username='zahra' />
          <OnlineUser gender='male' username='ali' chatting={{number: 3}} />
          <OnlineUser gender='female' username='zahra' />
          <OnlineUser gender='male' username='ali' />
          <OnlineUser gender='female' username='zahra' />
          <OnlineUser gender='male' username='ali' />
          <OnlineUser gender='female' username='zahra' chatting />
          <OnlineUser gender='male' username='ali' />
          <OnlineUser gender='female' username='zahra' />
        </ul>
        <RoomTitle title='German speakers' />
        <ul className='onlineUsers'>
          <OnlineUser gender='male' username='ali' />
          <OnlineUser gender='female' username='zahra' />
          <OnlineUser gender='male' username='ali' chatting={{number: 3}} />
          <OnlineUser gender='female' username='zahra' />
          <OnlineUser gender='male' username='ali' />
          <OnlineUser gender='female' username='zahra' />
          <OnlineUser gender='male' username='ali' />
          <OnlineUser gender='female' username='zahra' chatting />
          <OnlineUser gender='male' username='ali' />
          <OnlineUser gender='female' username='zahra' />
        </ul>
      </div>
    </StyledRightbar>
  )
}

export default Rightbar
