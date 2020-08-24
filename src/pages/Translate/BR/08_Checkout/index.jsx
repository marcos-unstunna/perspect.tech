import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { Container } from '../../../../styles/pages/checkout';

function Checkout() {
  const enabledButton = () => {
    const btn = document.getElementById('btnGo');
    if (btn.getAttribute('disabled') !== null) {
      btn.removeAttribute('disabled', 'disabled');
      btn.classList.remove('btnDisabled');
    } else {
      btn.setAttribute('disabled', 'disabled');
      btn.classList.add('btnDisabled');
    }
  };

  React.useEffect(() => {
    const plan = localStorage.getItem('plano');
    if (plan == 'semanal') {
      document.getElementById('btnRedirect').href = 'https://upnid.com/go/p32391?p=571r1&off=zxkqq';
    } else {
      document.getElementById('btnRedirect').href = 'https://upnid.com/go/p32391?p=571r1&off=klyqo';
    }
  }, []);

  return (
    <Container>
      <section data-aos="zoom-in">
        <header>
          <Link to="/PT" className="returnHome">
            <RiArrowLeftLine />
            {' '}
            <span>Inicio</span>
          </Link>

          <div className="textHeaderCheckout">
            <h1>ATENÇÃO</h1>
          </div>
        </header>

        <div>
          <p>
            Devido a grande demanda de pedidos, nós estamos entregando
            todas as máquinas em 1 à 2 dias úteis após a confirmação do pagamento.
          </p>

          <p>
            Nós enviamos todo o acesso via e-mail, fique atento.
          </p>

          <div className="container-input">
            <input onClick={() => enabledButton()} type="checkbox" name="checkboxGo" id="checkboxGo" />

            <label htmlFor="checkboxGo">
              Ao prosseguir, você concorda que irá receber
              a sua máquina no prazo determinado.
            </label>
          </div>

          <a id="btnRedirect" href="# ">
            <button disabled className="btnDisabled" type="button" id="btnGo">Continuar</button>
          </a>
        </div>
      </section>
    </Container>
  );
}

export default Checkout;
