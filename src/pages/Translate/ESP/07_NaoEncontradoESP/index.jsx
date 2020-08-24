import React from 'react';

// Styles
import { Link } from 'react-router-dom';
import { Container } from '../../../../styles/pages/nãoEncontrado';

// Components
import HelmetComponent from '../../../../components/Helmet/index';

function NãoEncontradoESP() {
  return (
    <Container>
      <HelmetComponent title="Página no encontrada" />

      <main className="bsod container" data-aos="zoom-in">
        <h1 className="neg title">
          <span className="bg"> Error - 404 </span>
        </h1>

        <h3> Se produjo un error, para continuar: </h3>

        <p>
          * Regresar a nuestra página de inicio.

          <br />
          * Envíenos un correo electrónico sobre este error e intente nuevamente más tarde.
        </p>

        <nav className="nav">
          <Link to="/esp" className="link">Comienzo</Link>
            &nbsp;|&nbsp;
          <Link to="/esp/apoyo" className="link">Apoyo</Link>
        </nav>
      </main>
    </Container>
  );
}

export default NãoEncontradoESP;
