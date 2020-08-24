import React from 'react';

// Styles
import {
  Container,
  PlanosContainer,
} from '../../../../styles/pages/planos';

// Components
import HelmetComponent from '../../../../components/Helmet/index';
import LayoutESP from '../../../../components/Routes/ESP/index';
import CardPricesESP from '../../../../components/CardPrices/ESP';

function PlanosESP() {
  return (
    <LayoutESP>
      <Container>
        <HelmetComponent title="PLANES" />

        <PlanosContainer>
          <CardPricesESP />
        </PlanosContainer>
      </Container>
    </LayoutESP>
  );
}

export default PlanosESP;
