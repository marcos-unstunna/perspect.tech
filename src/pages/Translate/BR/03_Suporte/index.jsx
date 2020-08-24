import React from 'react';

// Styles
import { Container } from '../../../../styles/pages/suporte';

// Components
import HelmetComponent from '../../../../components/Helmet/index';
import LayoutBR from '../../../../components/Routes/BR/index';

// Images
import Plataform from '../../../../assets/plataforma02.webp';

function Suporte() {
  return (
    <LayoutBR>
      <Container>
        <HelmetComponent title="SUPORTE" />

        <section id="container-support">
          <div className="column">
            <img src={Plataform} alt="Dispositivos com jogos na tela" />
          </div>

          <div className="column">
            <h1>PRECISA DE AJUDA?</h1>

            <p>
              Você pode entrar em contato com:
              {' '}
              <strong>suporte@perspect.tech</strong>
              {' '}
              <br />
              {' '}
              Ou junte-se à nossa comunidade do Discord!
            </p>

            <a href="https://discord.com/invite/zfrTVj7" target="__blank" rel="noopener">
              <button type="button">COMUNIDADE</button>
            </a>

          </div>
        </section>
      </Container>
    </LayoutBR>
  );
}

export default Suporte;
