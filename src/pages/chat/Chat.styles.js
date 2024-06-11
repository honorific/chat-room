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
    background-color: white;
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
