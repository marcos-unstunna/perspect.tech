import React from 'react';

// Styles
import { Link } from 'react-router-dom';
import { Container } from '../../../../styles/pages/nãoEncontrado';

// Components
import HelmetComponent from '../../../../components/Helmet/index';

function NãoEncontradoEN() {
  return (
    <Container>
      <HelmetComponent title="ERROR 404" />

      <main className="bsod container" data-aos="zoom-in">
        <h1 className="neg title">
          <span className="bg"> Error - 404 </span>
        </h1>

        <h3> An error occurred, to continue: </h3>

        <p>
          * Return to our home page.

          <br />
          * Send us an email about this error and try again later.
        </p>

        <nav className="nav">
          <Link to="/en" className="link"> Home </Link>
          &nbsp; | &nbsp;
          <Link to="/en/support" className="link"> Support </Link>
        </nav>
      </main>
    </Container>
  );
}

export default NãoEncontradoEN;
