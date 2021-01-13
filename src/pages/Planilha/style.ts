import styled from 'styled-components';

export const Container = styled.div`
  min-width: 500px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 20vw;
  }
`;

export const Header = styled.div`
  color: #570903;
  .Name {
    input {
      width: 100%;
      background: hsla(255, 100%, 100%, 0.15);
      padding: 10px;
      border: 0;
      border-radius: 5px;
      font-size: 24px;
      margin-bottom: 8px;
      color: #570903;
    }
  }

  .Others {
    display: flex;
    margin-bottom: 20px;
    label {
      font-weight: 600;
    }
    .Classe input {
      display: flex;
      flex-direction: column;
      margin-right: 8px;
      background: hsla(255, 100%, 100%, 0.15);
      padding: 10px;
      border: 0;
      border-radius: 5px;
      font-size: 24px;
      margin-bottom: 8px;
    }
    .Raça input {
      display: flex;
      flex-direction: column;
      margin-right: 8px;

      background: hsla(255, 100%, 100%, 0.15);
      padding: 10px;
      border: 0;
      border-radius: 5px;
      font-size: 24px;
      margin-bottom: 8px;
    }
    .Alinhamento input {
      display: flex;
      flex-direction: column;

      background: hsla(255, 100%, 100%, 0.15);
      padding: 10px;
      border: 0;
      border-radius: 5px;
      font-size: 24px;
      margin-bottom: 8px;
    }
  }
`;
export const Attribuits = styled.div``;
export const SubAtrribuits = styled.div``;
export const Attacks = styled.div``;
export const Notations = styled.div``;
