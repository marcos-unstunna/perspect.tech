import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

const LayoutEN = ({ children }) => (
  <>
    <Header
      route1="/en"
      route2="/en/plans"
      route3="/en/support"
      nameRoute1="Home"
      nameRoute2="Plans"
      nameRoute3="Support"
      button="Client Panel"
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
      route1="/en"
      route2="/en/plans"
      route3="/en/support"
      route4="/en/terms"
      route5="/en/privacy"
      nameRoute1="Home"
      nameRoute2="Plans"
      nameRoute3="Support"
      nameRoute4="Service Terms"
      nameRoute5="Privacy Policy"
      direitos="All rights reserved"
      title1="Shortcuts"
      title2="Means"
      title3="Support"
    />
  </>
);

export default LayoutEN;
