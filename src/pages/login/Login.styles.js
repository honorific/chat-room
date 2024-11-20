import styled from 'styled-components'

export const StyledLogin = styled.div.withConfig({
  shouldForwardProp: (props) => props !== 'loading',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({theme}) => theme.secondary};

  & form {
    display: flex;
    width: 300px;
    flex-direction: column;
  }

  & form > input,
  & form > button {
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
  }

  & > form > input {
    margin-bottom: 20px;
  }

  & form > button {
    background-color: ${(props) => (props.loading ? 'black' : '#146ef5')};
    color: white;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
  & div.gender {
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    padding: 2px;
  }
  & div.gender span {
    padding: 5px 15px;
    text-align: center;
    border-radius: 10px;
    width: 100%;
    font-weight: bold;
  }
  & span.selectedGender {
    background-color: black;
    color: white;
  }
`
