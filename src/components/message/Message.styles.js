import styled from 'styled-components'

export const StyledMessage = styled.div.withConfig({
  shouldForwardProp: (props) => props !== 'sty',
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  justify-content: ${(props) => (props.sty ? 'flex-end' : 'flex-start')};
  & span {
    font-weight: bold;
  }
  & p {
    background-color: ${(props) => (props.sty ? 'blue' : '#dfdfdf')};
    border-radius: 20px;
    color: ${(props) => (props.sty ? 'white' : 'black')};
    padding: 10px 15px;
    margin-left: 5px;
  }
`
