import React from 'react';

// Styles
import { Link } from 'react-router-dom';
import { Container } from '../../../../styles/pages/nãoEncontrado';

// Components
import HelmetComponent from '../../../../components/Helmet/index';

function NãoEncontrado() {
  return (
    <Container>
      <HelmetComponent title="ERROR 404" />

      <main className="bsod container" data-aos="zoom-in">
        <h1 className="neg title">
          <span className="bg">Error - 404</span>
        </h1>

        <h3>Ocorreu um erro, para continuar:</h3>

        <p>
          * Retorne à nossa página inicial.
          {' '}
          <br />
          * Envie-nos um e-mail sobre esse erro e tente novamente mais tarde.
        </p>

        <nav className="nav">
          <Link to="/pt" className="link">Início</Link>
            &nbsp;|&nbsp;
          <Link to="/pt/suporte" className="link">Suporte</Link>
        </nav>
      </main>
    </Container>
  );
}

export default NãoEncontrado;
