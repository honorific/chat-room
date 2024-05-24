import styled from 'styled-components'

export const StyledOnlineUserOptions = styled.ul`
  position: absolute;
  left: calc(${(props) => props.coordinates[0]}px - 200px);
  top: calc(${(props) => props.coordinates[1]}px - ${window.scrollY}px);
  background-color: aliceblue;
  list-style-type: none;
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 200px;
`
