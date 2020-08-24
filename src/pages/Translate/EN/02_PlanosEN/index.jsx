import React from 'react';

// Styles
import {
  Container,
  PlanosContainer,
} from '../../../../styles/pages/planos';

// Components
import LayoutEN from '../../../../components/Routes/EN/index';
import CardPricesEN from '../../../../components/CardPrices/EN/index';
import HelmetComponent from '../../../../components/Helmet/index';

function PlanosEN() {
  return (
    <LayoutEN>
      <Container>
        <HelmetComponent title="PLANS" />

        <PlanosContainer>
          <CardPricesEN />
        </PlanosContainer>
      </Container>
    </LayoutEN>
  );
}

export default PlanosEN;
