import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logoImg from '../../assets/logos.png';

import { Container, Content, Background } from './style';
import Input from '../../components/Input';

const LandingPage: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="OldDragon" />
      <form>
        <h1>Bem Vindo Aventureiro</h1>
        <Input name="Name" placeholder="Nome" />
        <Input name="Email" type="email" placeholder="Email" />
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
