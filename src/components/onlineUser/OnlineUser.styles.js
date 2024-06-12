import styled from 'styled-components'

export const StyledOnlineUser = styled.li.withConfig({
  shouldForwardProp: (props) => props !== 'sty',
})`
  margin-top: 5px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  transition: 0.3s ease-out;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.sty.chatting ? 'space-between' : 'flex-end'};
  align-items: center;
  background-color: ${(props) =>
    props.sty.chatting ? props.theme.accent : props.theme.body};
  color: ${({theme}) => theme.text};
  &:hover {
    background-color: ${({theme}) => theme.accent};
  }
  & > div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  & span {
    order: -1;
    background-color: blue;
    border-radius: 20px;
    padding: ${(props) => (props.sty.chatting?.number ? '4px 7px' : '4px')};
    font-size: 12px;
    font-weight: bold;
    color: white;
  }
`
