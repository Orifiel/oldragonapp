import styled from 'styled-components';

export const Container = styled.div`
  min-width: 700px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 30vw;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  .others {
    margin-top: 10px;
    display: flex;
    flex-direction: row;

    div:nth-child(2) {
      margin: 0 15px;
    }
  }
`;
export const Attribuits = styled.div`
  min-width: 700px;
  text-align: center;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    form {
      width: 50%;
      display: flex;
      flex-direction: column;

      div {
        width: 50%;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: start;
        p {
          width: 50px;

          margin-right: 15px;
          font-weight: 600;
        }
        div {
          margin-right: 5px;
        }
      }
    }
  }
`;
export const SubAtrribuits = styled.div``;
export const Attacks = styled.div``;
export const Notations = styled.div``;
