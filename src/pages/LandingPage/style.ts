import styled from 'styled-components';
import { shade } from 'polished';

import ImgBackground from '../../assets/ImgBackground.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  img {
    width: 30vw;
    max-width: 400px;
    margin: 10vh;
  }
  h1 {
    text-align: center;
    margin-bottom: 3vh;
    color: #570903;
  }
  form {
    display: flex;
    flex-direction: column;

    input {
      background: transparent;
      border-radius: 10px;
      padding: 16px;
      width: 95%;
      margin: 8px;
      display: flex;
      align-items: center;
      border: 0;
      border-bottom: 1px solid #570903;
    }
    & + input {
      margin-top: 0.6rem;
    }

    button {
      background: #570903;
      color: #fff;
      padding: 0 16px;
      height: 40px;
      width: 60%;
      align-self: center;
      margin: 40px 0;
      border-radius: 16px;
      border: 0;
      transition: background-color 0.2s;

      :hover {
        background: ${shade(0.5, '#F19E18')};
      }
    }

    a {
      text-decoration: none;
      font-weight: 600;
      color: #570903;
      display: block;
      text-align: center;
      transition: color 0.2s;

      :hover {
        color: ${shade(0.3, '#F19E18')};
      }
    }
  }

  > a {
    color: #570903;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    font-size: 1rem;
    display: flex;
    align-items: center;

    :hover {
      color: ${shade(0.3, '#F19E18')};
    }
  }

  svg {
    font-size: 1.2rem;
    margin-right: 8px;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${ImgBackground}) no-repeat center;
  background-size: cover;
`;
