import styled from 'styled-components'

export const StyledChat = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  direction: rtl;
  height: calc(100vh - 80px);
  gap: 15px;
  padding: 40px;
  background-color: ${({theme}) => theme.secondary};
  & > div {
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background-color: ${({theme}) => theme.body};
  }
  & .main {
    overflow-y: scroll;
    background-clip: text;
  }
  & > div.main:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  & > div.main::-webkit-scrollbar {
    width: 5px;
  }
  & > div.main::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  & > div.main::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: inherit;
  }
  & > .main > div {
    background-color: ${({theme}) => theme.body};
    width: 100%;
    position: absolute;
  }
  .rightbarContainer {
    grid-column: 1 / 4;
  }
  .main {
    grid-column: 4 / 13;
    direction: ltr;
    position: relative;
  }
`
