import React from 'react';

// Styles
import { Link } from 'react-router-dom';
import { Container } from '../../../../styles/pages/nãoEncontrado';

// Components
import HelmetComponent from '../../../../components/Helmet/index';

function NãoEncontradoFIN() {
  return (
    <Container>
      <HelmetComponent title="ERROR 404" />

      <main className="bsod container" data-aos="zoom-in">
        <h1 className="neg title">
          <span className="bg">Error - 404</span>
        </h1>

        <h3>Jatkuu tapahtui virhe:</h3>

        <p>
          * Palaa kotisivullemme.
          {' '}
          <br />
          * Lähetä meille sähköpostia tästä virheestä ja yritä myöhemmin uudelleen.
        </p>

        <nav className="nav">
          <Link to="/fin" className="link">Alkaa</Link>
            &nbsp;|&nbsp;
          <Link to="/fin/Tuki" className="link">Tuki</Link>
        </nav>
      </main>
    </Container>
  );
}

export default NãoEncontradoFIN;
