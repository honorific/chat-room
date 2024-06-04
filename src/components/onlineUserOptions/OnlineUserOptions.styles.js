import styled from 'styled-components'

const passedProps = ['show', 'coordinates']

export const StyledOnlineUserOptions = styled.ul.withConfig({
  shouldForwardProp: (props) => !passedProps.includes(props),
})`
  position: absolute;
  left: calc(${(props) => props.coordinates[0]}px - 220px);
  top: ${(props) =>
    window.screen.height - 300 < props.coordinates[1]
      ? `calc(${props.coordinates[1]}px - ${window.scrollY}px - 70px )`
      : (props) => props.coordinates[1] - window.scrollY + 'px'};
  background-color: black;
  color: white;
  list-style-type: none;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  transition: opacity 0.7s, visibility 0.7s;
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
  & i {
    color: red;
  }
`
