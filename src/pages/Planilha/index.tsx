import React from 'react';

import { Container, Header, Attribuits, Attacks, Notations } from './style';
import Logo from '../../assets/logos.png';

const Planilha: React.FC = () => (
  <>
    <Container>
      <img src={Logo} alt="Old Dragon" />
      <Header>
        <div className="Name">
          <label htmlFor="Nome">
            <input type="text" name="Nome" id="" />
            Personagem
          </label>
        </div>
        <div className="Others">
          <div className="Classe">
            <label htmlFor="Classe">
              <input type="text" name="Classe" id="" />
              Classe
            </label>
          </div>
          <div className="Raça">
            <label htmlFor="Raça">
              <input type="text" name="Raça" id="" />
              Raça
            </label>
          </div>
          <div className="Alinhamento">
            <label htmlFor="Alinhamento">
              <input type="text" name="Alinhamento" id="" />
              Alinhamento
            </label>
          </div>
        </div>
      </Header>
      <Attribuits>
        <h2>Atributos</h2>
      </Attribuits>
      <Attacks>
        <h2>Ataques</h2>
      </Attacks>
      <Notations>
        <h2>Anotações</h2>
      </Notations>
    </Container>
  </>
);

export default Planilha;
