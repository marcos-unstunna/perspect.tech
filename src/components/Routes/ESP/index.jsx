import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

const LayoutESP = ({ children }) => (
  <>
    <Header
      route1="/esp"
      route2="/esp/planes"
      route3="/esp/apoyo"
      nameRoute1="Hogar"
      nameRoute2="Planes"
      nameRoute3="Apoyo"
      button="Panel de Clientes"
    />

    {children}

    <Footer
      routeFooterBR="/pt"
      routeNameBR="Português do Brasil"
      routeFooterEN="/en"
      routeNameEN="English, USA"
      routeFooterESP="/esp"
      routeNameESP="Español"
      routeFooterFIN="/fin"
      routeNameFIN="Finland"
      route1="/esp"
      route2="/esp/planes"
      route3="/esp/apoyo"
      route4="/esp/condiciones"
      route5="/esp/intimidad"
      nameRoute1="Hogar"
      nameRoute2="Planes"
      nameRoute3="Apoyo"
      nameRoute4="Términos de Servicio"
      nameRoute5="Política de Privacidad"
      direitos="Todos los derechos reservados"
      title1="Atajos"
      title2="Medio"
      title3="Apoyo"
    />
  </>
);

export default LayoutESP;
