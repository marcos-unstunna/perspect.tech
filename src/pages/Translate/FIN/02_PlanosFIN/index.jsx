import React from 'react';

// Styles
import {
  Container,
  PlanosContainer,
} from '../../../../styles/pages/planos';

// Components
import HelmetComponent from '../../../../components/Helmet/index';
import LayoutFIN from '../../../../components/Routes/FIN/index';
import CardPricesFIN from '../../../../components/CardPrices/FIN';

function PlanosFIN() {
  return (
    <LayoutFIN>
      <Container>
        <HelmetComponent title="SUUNNITELMAT" />

        <PlanosContainer>
          <CardPricesFIN />
        </PlanosContainer>
      </Container>
    </LayoutFIN>
  );
}

export default PlanosFIN;
