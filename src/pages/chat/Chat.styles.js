import styled from 'styled-components'

export const StyledChat = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  direction: rtl;
  height: calc(100vh - 80px);
  gap: 15px;
  padding: 40px;
  background-color: ${({theme}) => theme.secondary};
  & > div:not(.chatBox) {
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background-color: ${({theme}) => theme.body};
  }
  & .mainScroller {
    overflow-y: scroll;
    min-height: calc(100vh - 80px);
    background-clip: text;
    position: relative;
    border-radius: 10px;
  }
  & div.mainScroller:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  & div.mainScroller::-webkit-scrollbar {
    width: 5px;
  }
  & div.mainScroller::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  & div.mainScroller::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: inherit;
  }
  & .mainScroller > div:not(.chatbox) {
    background-color: ${({theme}) => theme.body};
    width: 100%;
    position: absolute;
  }
  & > .main form {
    bottom: 0px;
  }
  .rightbarContainer {
    grid-column: 1 / 4;
  }
  & .mainScroller > div > div:last-of-type {
    margin-bottom: 140px;
  }
  .main {
    grid-column: 4 / 13;
    direction: ltr;
    position: relative;
  }
`
