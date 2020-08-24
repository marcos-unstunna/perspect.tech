import React from 'react';

// Styles
import { Container } from '../../../../styles/pages/suporte';

// Components
import LayoutEN from '../../../../components/Routes/EN/index';
import HelmetComponent from '../../../../components/Helmet/index';

// Images
import Plataform from '../../../../assets/plataforma02.webp';

function SuporteEN() {
  return (
    <LayoutEN>
      <Container>
        <HelmetComponent title="SUPPORT" />

        <section id="container-support">
          <div className="column">
            <img src={Plataform} alt="Devices with on-screen games" />
          </div>

          <div className="column">
            <h1>You need help?</h1>

            <p>
              Send an email to:
              {' '}
              <strong>suporte@perspect.tech</strong>
              Or join our official Discord community.
            </p>

            <a href="https://discord.com/invite/zfrTVj7" target="__blank" rel="noopener">
              <button type="button">COMMUNITY</button>
            </a>

          </div>
        </section>
      </Container>
    </LayoutEN>
  );
}

export default SuporteEN;
