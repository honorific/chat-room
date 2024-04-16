import styled from 'styled-components'

export const StyledRightbar = styled.div`
  grid-column: 1 / 4;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  direction: ltr;
  transition: 0.3s ease-out;
  background-color: rgba(0, 0, 0, 0);
  background-clip: text;
  margin: 0;
  padding: 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: inherit;
  }
  .content {
    direction: rtl;
    background-color: white;
    border-radius: 10px;
    margin: 10px;
  }
  .onlineUsers {
    list-style-type: none;
    margin: 0px;
  }
`
