import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// en_US
import InicioEN from './pages/Translate/EN/01_InicioEN/index';
import PlanosEN from './pages/Translate/EN/02_PlanosEN/index';
import SuporteEN from './pages/Translate/EN/03_SuporteEN/index';
import PrivacidadeEN from './pages/Translate/EN/05_PrivacidadeEN/index';
import TermosEN from './pages/Translate/EN/06_TermosEN/index';
import NãoEncontradoEN from './pages/Translate/EN/07_NaoEncontradoEN/index';
import CheckoutEN from './pages/Translate/EN/08_CheckoutEN/index';

// es_ES
import InicioESP from './pages/Translate/ESP/01_InicioESP/index';
import PlanosESP from './pages/Translate/ESP/02_PlanosESP/index';
import SuporteESP from './pages/Translate/ESP/03_SuporteESP/index';
import PrivacidadeESP from './pages/Translate/ESP/05_PrivacidadeESP/index';
import TermosESP from './pages/Translate/ESP/06_TermosESP/index';
import NãoEncontradoESP from './pages/Translate/ESP/07_NaoEncontradoESP/index';
import CheckoutESP from './pages/Translate/ESP/08_CheckoutESP/index';

// pt_BR
import Inicio from './pages/Translate/BR/01_Inicio/index';
import Planos from './pages/Translate/BR/02_Planos/index';
import Suporte from './pages/Translate/BR/03_Suporte/index';
import Privacidade from './pages/Translate/BR/05_Privacidade/index';
import Termos from './pages/Translate/BR/06_Termos/index';
import NãoEncontrado from './pages/Translate/BR/07_NaoEncontrado/index';
import Checkout from './pages/Translate/BR/08_Checkout/index';

// fi_FI
import InicioFIN from './pages/Translate/FIN/01_InicioFIN/index';
import PlanosFIN from './pages/Translate/FIN/02_PlanosFIN/index';
import SuporteFIN from './pages/Translate/FIN/03_SuporteFIN/index';
import PrivacidadeFIN from './pages/Translate/FIN/05_PrivacidadeFIN/index';
import TermosFIN from './pages/Translate/FIN/06_TermosFIN/index';
import NãoEncontradoFIN from './pages/Translate/FIN/07_NaoEncontradoFIN/index';
import CheckoutFIN from './pages/Translate/FIN/08_CheckoutFIN/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/PT" exact component={Inicio} />
        <Route path="/PT/Planos" component={Planos} />
        <Route path="/PT/Suporte" component={Suporte} />
        <Route path="/PT/Termos" component={Termos} />
        <Route path="/PT/Privacidade" component={Privacidade} />
        <Route path="/PT/Checkout" component={Checkout} />
        <Route path="/PT/*" component={NãoEncontrado} />

        <Route path="/EN" exact component={InicioEN} />
        <Route path="/EN/Plans" component={PlanosEN} />
        <Route path="/EN/Support" component={SuporteEN} />
        <Route path="/EN/Terms" component={TermosEN} />
        <Route path="/EN/Privacy" component={PrivacidadeEN} />
        <Route path="/EN/Checkout" component={CheckoutEN} />
        <Route path="/EN/*" component={NãoEncontradoEN} />

        <Route path="/ESP" exact component={InicioESP} />
        <Route path="/ESP/Planes" component={PlanosESP} />
        <Route path="/ESP/Apoyo" component={SuporteESP} />
        <Route path="/ESP/Condiciones" component={TermosESP} />
        <Route path="/ESP/Intimidad" component={PrivacidadeESP} />
        <Route path="/ESP/Revisa" component={CheckoutESP} />
        <Route path="/ESP/*" component={NãoEncontradoESP} />

        <Route path="/FIN" exact component={InicioFIN} />
        <Route path="/FIN/Suunnitelmat" component={PlanosFIN} />
        <Route path="/FIN/Tuki" component={SuporteFIN} />
        <Route path="/FIN/Ehdot" component={TermosFIN} />
        <Route path="/FIN/Yksityisyys" component={PrivacidadeFIN} />
        <Route path="/FIN/Tarkista" component={CheckoutFIN} />
        <Route path="/FIN/*" component={NãoEncontradoFIN} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
