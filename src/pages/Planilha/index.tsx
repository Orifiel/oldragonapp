import React from 'react';

import { Container, Header, Attribuits, Attacks, Notations } from './style';

const Planilha: React.FC = () => (
  <>
    <Container>
      <Header>
        <input name="Personagem" type="text" placeholder="Personagem" />
        <input name="Classe" type="text" placeholder="Classe" />
        <input name="Raça" type="text" placeholder="Raça" />
        <input name="Alinhamento" type="text" placeholder="Alinhamento" />
      </Header>
      <Attribuits>
        <form action="#">
          <label htmlFor="FOR">
            FOR :
            <input name="FOR" type="text" />
          </label>
          <label htmlFor="DES">
            DES :
            <input name="DES" type="text" />
          </label>
          <label htmlFor="CON">
            CON :
            <input name="CON" type="text" />
          </label>
          <label htmlFor="INT">
            INT :
            <input name="INT" type="text" />
          </label>
          <label htmlFor="SAB">
            SAB :
            <input name="SAB" type="text" />
          </label>
          <label htmlFor="CAR">
            CAR :
            <input name="CAR" type="text" />
          </label>
        </form>
      </Attribuits>
      <Attacks>
        <input type="text" />
      </Attacks>
      <Notations>
        <input type="text" />
      </Notations>
    </Container>
  </>
);

export default Planilha;
