import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

const LayoutFIN = ({ children }) => (
  <>
    <Header
      route1="/fin"
      route2="/fin/suunnitelmat"
      route3="/fin/tuki"
      nameRoute1="Alkaa"
      nameRoute2="Suunnitelmat"
      nameRoute3="Tuki"
      button="Asiakaspaneeli"
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
      route1="/fin"
      route2="/fin/suunnitelmat"
      route3="/fin/tuki"
      route4="/fin/ehdot"
      route5="/fin/yksityisyys"
      nameRoute1="Alkaa"
      nameRoute2="Suunnitelmat"
      nameRoute3="Tuki"
      nameRoute4="Käyttöehdot"
      nameRoute5="Tietosuojakäytäntö"
      direitos="Kaikki Oikeudet Pidätetään"
      title1="Pikakuvakkeet"
      title2="Keskikokoinen"
      title3="Tuki"
    />
  </>
);

export default LayoutFIN;
