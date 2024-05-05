import styled from 'styled-components'

export const StyledOnlineUserOptions = styled.ul`
  position: absolute;
  left: ${(props) => props.coordinates[0]};
  top: ${(props) => props.coordinates[1]};
  background-color: aliceblue;
  list-style-type: none;
  z-index: 10;
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 200px;
`
