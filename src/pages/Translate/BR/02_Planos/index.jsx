import React from 'react';

// Styles
import {
  Container,
  PlanosContainer,
} from '../../../../styles/pages/planos';

// Components
import LayoutBR from '../../../../components/Routes/BR/index';
import HelmetComponent from '../../../../components/Helmet/index';
import CardPricesBR from '../../../../components/CardPrices/BR';

function Planos() {
  return (
    <LayoutBR>
      <Container>
        <HelmetComponent title="PLANOS" />

        <PlanosContainer>
          <CardPricesBR />
        </PlanosContainer>
      </Container>
    </LayoutBR>
  );
}

export default Planos;
