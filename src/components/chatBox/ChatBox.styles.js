import styled from 'styled-components'
const unForwardedProps = ['chatWith', 'cords', 'fscreen']
export const StyledChatBox = styled.div.withConfig({
  shouldForwardProp: (props) => !unForwardedProps.includes(props),
})`
  width: ${(props) => (props.fscreen ? '100vw' : '400px')};
  height: 40px;
  direction: ltr;
  display: flex;
  background-color: ${({theme}) => theme.secondary};
  -webkit-box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
  box-shadow: -9px 4px 20px 3px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 1000;
  top: ${(props) =>
    !props.fscreen && props.cords.top
      ? `${props.cords.top}px`
      : props.fscreen
      ? '0px !important'
      : '100px'};
  left: ${(props) =>
    !props.fscreen && props.cords.left
      ? `${props.cords.left}px`
      : props.fscreen
      ? '0px !important'
      : '100px'};
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
    bottom: ${(props) => (props.fscreen ? '-70px' : '-300px')};
  }
  & h6 {
    display: inline-block;
    margin: auto;
    text-align: center;
  }
`
