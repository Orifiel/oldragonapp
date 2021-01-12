import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logos.png';

import { Container, Content, Background } from './style';

const LandingPage: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="OldDragon" />
      <form>
        <h1>Bem Vindo Aventureiro</h1>
        <input name="email" placeholder="E-mail" />
        <input name="password" type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default LandingPage;
