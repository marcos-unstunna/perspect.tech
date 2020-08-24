import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

const LayoutBR = ({ children }) => (
  <>
    <Header
      route1="/pt"
      route2="/pt/planos"
      route3="/pt/suporte"
      nameRoute1="Inicio"
      nameRoute2="Planos"
      nameRoute3="Suporte"
      button="Painel do Cliente"
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
      route1="/pt"
      route2="/pt/planos"
      route3="/pt/suporte"
      route4="/pt/termos"
      route5="/pt/privacidade"
      nameRoute1="Inicio"
      nameRoute2="Planos"
      nameRoute3="Suporte"
      nameRoute4="Termos de Serviço"
      nameRoute5="Política de Privacidade"
      direitos="Todos os direitos reservados"
      title1="Atalhos"
      title2="Recursos"
      title3="Suporte"
    />
  </>
);

export default LayoutBR;
