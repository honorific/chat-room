import styled from 'styled-components'

const StyledOnlineUser = styled.li`
  margin-top: 5px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  transition: 0.3s ease-out;
  & > div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  &:hover {
    background-color: aliceblue;
  }
  &.chatting::after {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 5px;
  }
`

export default StyledOnlineUser
