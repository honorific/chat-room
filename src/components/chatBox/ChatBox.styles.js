import styled from 'styled-components'

export const StyledChatBox = styled.div`
  width: 400px;
  height: 50px;
  background-color: ${({theme}) => theme.secondary};
  -webkit-box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
  box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
  padding: 0;
  & svg {
    padding: 10px;
    background-color: ${({theme}) => theme.body};
    font-size: 18px;
    transition: all 0.3s ease-out;
    color: ${({theme}) => theme.text};
  }
  & svg:nth-child(1) {
    color: red;
  }
  & svg:nth-child(1):hover {
    color: white;
    background-color: red;
  }
  & svg:nth-child(2):hover,
  & svg:nth-child(3):hover {
    background-color: #ddd;
    color: black;
  }
`
