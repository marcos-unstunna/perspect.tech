import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { Container } from '../../../../styles/pages/checkout';

function CheckoutESP() {
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
            <h1>ATENCIÓN</h1>
          </div>
        </header>

        <div>
          <p>
            Debido a la gran demanda de pedidos, estamos entregando
            todas las máquinas en 1 a 2 días hábiles después de la confirmación del pago.
          </p>

          <p>
            Enviamos todos los accesos por correo electrónico, estad atentos.
          </p>

          <div className="container-input">
            <input onClick={() => enabledButton()} type="checkbox" name="checkboxGo" id="checkboxGo" />

            <label htmlFor="checkboxGo">
              Al continuar, acepta que recibirá
              su máquina dentro del tiempo especificado.
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

export default CheckoutESP;
