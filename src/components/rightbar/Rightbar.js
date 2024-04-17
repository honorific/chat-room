import RoomAndUsers from '../roomAndUsers/RoomAndUsers'
import {StyledRightbar} from './Rightbar.styles'

const Rightbar = () => {
  return (
    <StyledRightbar>
      <div className='content'>
        <RoomAndUsers />
        <RoomAndUsers otherRoom={true} roomTitle='German speakers' />
        <RoomAndUsers otherRoom={true} roomTitle='Russian speakers' />
      </div>
    </StyledRightbar>
  )
}

export default Rightbar
