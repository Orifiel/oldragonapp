import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: hsla(255, 100%, 100%, 0.15);
  padding: 16px;
  border: 0;
  border-radius: 20px;
  font-size: 20px;
  color: #570903;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    appearance: none;

    ::placeholder {
      color: #570903;
      font-style: italic;
    }
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
