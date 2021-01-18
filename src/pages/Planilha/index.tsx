import React from 'react';

import { Container, Header, Attribuits, Attacks, Notations } from './style';
import Input from '../../components/Input';
import Logo from '../../assets/logos.png';

const Planilha: React.FC = () => (
  <>
    <Container>
      <img src={Logo} alt="Old Dragon" />
      <Header>
        <Input type="text" name="Nome" placeholder="Personagem" />
        <div className="others">
          <Input type="text" name="Raça" placeholder="Raça" />

          <Input type="text" name="Classe" placeholder="Classe" />

          <Input type="text" name="Alinhamento" placeholder="Alinhamento" />
        </div>
      </Header>
      <Attribuits>
        <div>
          <h2>Atributos</h2>
        </div>

        <div>
          <form action="forgot">
            <div>
              <div>
                <p>FOR</p>
              </div>
              <Input name="força" type="number" min="8" max="20" />
              <Input name="modFOR" type="integer" disabled defaultValue={0} />
            </div>
            <div>
              <div>
                <p>DES</p>
              </div>
              <Input name="destreza" type="number" min="8" max="20" />
              <Input name="modDES" type="number" disabled defaultValue={0} />
            </div>
            <div>
              <div>
                <p>CON</p>
              </div>
              <Input name="Constituição" type="number" min="8" max="20" />
              <Input name="modCON" type="number" disabled defaultValue={0} />
            </div>
            <div>
              <div>
                <p>INT</p>
              </div>
              <Input name="inteligencia" type="number" min="8" max="20" />
              <Input name="modINT" type="number" disabled defaultValue={0} />
            </div>
            <div>
              <div>
                <p>SAB</p>
              </div>
              <Input name="sabedoria" type="number" min="8" max="20" />
              <Input name="modSAB" type="number" disabled defaultValue={0} />
            </div>
            <div>
              <div>
                <p>CAR</p>
              </div>
              <Input name="Carisma" type="number" min="8" max="20" />
              <Input name="modCAR" type="number" disabled defaultValue={0} />
            </div>
          </form>
        </div>
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
