import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { Container } from '../../../../styles/pages/checkout';

function CheckoutFIN() {
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
            <span>Alkaa</span>
          </Link>

          <div className="textHeaderCheckout">
            <h1>HUOMIO</h1>
          </div>
        </header>

        <div>
          <p>
            Tilausten suuren kysynnän vuoksi toimitamme
            kaikki koneet 1-2 työpäivän kuluessa maksun vahvistuksesta.
          </p>

          <p>
            Lähetämme kaikki pääsy sähköpostitse, ole kuulolla.
          </p>

          <div className="container-input">
            <input onClick={() => enabledButton()} type="checkbox" name="checkboxGo" id="checkboxGo" />

            <label htmlFor="checkboxGo">
              Jatkamalla hyväksyt, että saat
              koneesi määritetyn ajan kuluessa.
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

export default CheckoutFIN;
