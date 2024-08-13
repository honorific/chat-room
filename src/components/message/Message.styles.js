import styled from 'styled-components'
const unForwardedProps = ['sty', 'dm']

export const StyledMessage = styled.div.withConfig({
  shouldForwardProp: (props) => !unForwardedProps.includes(props),
})`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.sty ? 'flex-end' : 'flex-start')};
  align-items: center;
  margin: 10px;
  & span {
    font-weight: bold;
    color: ${({theme}) => theme.text};
  }
  & p {
    background-color: ${(props) => (props.sty ? 'blue' : '#dfdfdf')};
    border-radius: 20px;
    color: ${(props) => (props.sty ? 'white' : 'black')};
    padding: 10px 15px;
    margin-left: 5px;
    width: max-content;
  }
  & .timeContainer {
    position: relative;
  }
  & time {
    display: block;
    font-size: 14px;
    color: #c9c9c9;
    font-style: italic;
    margin: ${(props) => (props.sty ? '0px 15px 0px 0px' : '0px 0px 0px 15px')};
    position: absolute;
    bottom: ${(props) => (props.dm ? '0px' : '-16px')};
    ${(props) => (props.sty ? 'left: -60px' : 'right: -60px')};
  }
`
