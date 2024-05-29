import styled from 'styled-components'

export const StyledOnlineUserOptions = styled.ul`
  position: absolute;
  left: calc(${(props) => props.coordinates[0]}px - 220px);
  top: calc(${(props) => props.coordinates[1]}px - ${window.scrollY}px);
  background-color: black;
  color: white;
  list-style-type: none;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: opacity 0.7s;
  opacity: ${(props) => (props.show ? 0.8 : 0)};
  width: 200px;
  z-index: 99;
  border-radius: 10px;
  padding: 10px;
  cursor: auto;
  & li {
    border-radius: 4px;
    padding: 5px;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
  & li:hover {
    background-color: aliceblue;
    color: black;
  }
  & svg {
    cursor: pointer;
  }
`
