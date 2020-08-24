import React from 'react';

// Styles
import { Container } from '../../../../styles/pages/suporte';

// Components
import HelmetComponent from '../../../../components/Helmet/index';
import LayoutESP from '../../../../components/Routes/ESP/index';

// Images
import Plataform from '../../../../assets/plataforma02.webp';

function SuporteESP() {
  return (
    <LayoutESP>
      <Container>
        <HelmetComponent title="APOYO" />

        <section id="container-support">
          <div className="column">
            <img src={Plataform} alt="Dispositivos con juegos en pantalla" />
          </div>

          <div className="column">
            <h1>¿NECESITA AYUDA?</h1>

            <p>
              Enviar un correo electrónico a:
              {' '}
              <stron>suporte@perspect.tech</stron>
              {' '}
              <br />
              O únete a nuestra comunidad Discord!
            </p>

            <a href="https://discord.com/invite/zfrTVj7" target="__blank" rel="noopener">
              <button type="button">COMUNIDAD</button>
            </a>

          </div>
        </section>
      </Container>
    </LayoutESP>
  );
}

export default SuporteESP;
