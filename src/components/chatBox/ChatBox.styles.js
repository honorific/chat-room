import styled from 'styled-components'

export const StyledChatBox = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  background-color: ${({theme}) => theme.secondary};
  -webkit-box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
  box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
  position: relative;
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
  & > div {
    height: 300px;
    width: 100%;
    position: absolute;
    top: 40px;
    background-color: ${({theme}) => theme.body};
    -webkit-box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
    box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 10px 10px;
    overflow-y: scroll;
    background-clip: text;
    transition: 0.3s ease-out;
    margin: 0;
    padding: 0;
  }
  & > div:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  & > div::-webkit-scrollbar {
    width: 5px;
  }
  & > div::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  & > div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: inherit;
  }
  & > div > div {
    background-color: ${({theme}) => theme.body};
    width: 100%;
    position: absolute;
  }
  & > div > div > div:last-child {
    margin-bottom: 140px;
  }
  & form {
    bottom: -300px;
  }
`
