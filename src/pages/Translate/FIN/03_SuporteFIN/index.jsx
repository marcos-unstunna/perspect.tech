import React from 'react';

// Styles
import { Container } from '../../../../styles/pages/suporte';

// Components
import HelmetComponent from '../../../../components/Helmet/index';
import LayoutFIN from '../../../../components/Routes/FIN/index';

// Images
import Plataform from '../../../../assets/plataforma02.webp';

function SuporteFIN() {
  return (
    <LayoutFIN>
      <Container>
        <HelmetComponent title="TUKI" />

        <section id="container-support">
          <div className="column">
            <img src={Plataform} alt="Dispositivos com jogos na tela" />
          </div>

          <div className="column">
            <h1>TARVITSETKO APUA?</h1>

            <p>
              Lähetä sähköpostia osoitteeseen:
              {' '}
              <strong>suporte@perspect.tech</strong>
              {' '}
              <br />
              Tai liity Discord-yhteisöömme
            </p>

            <a href="https://discord.com/invite/zfrTVj7" target="__blank" rel="noopener">
              <button type="button">YHTEISÖ</button>
            </a>

          </div>
        </section>
      </Container>
    </LayoutFIN>
  );
}

export default SuporteFIN;
