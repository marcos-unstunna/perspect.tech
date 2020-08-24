import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import CardPrice from '../../CardPrice';

function CardPricesBR() {
  return (
    <section id="container-prices">
      <div className="columns">
        <CardPrice
          title="BOOSTER"
          routeToCheckout="/PT/Checkout"
          button="Comprar"
          plan={1}
          price="R$35,05 / Semanal"
        >
          <li className="vantagens">
            <BsCheck className="check checkFirst" />
            <span>RTX 2080 TI</span>

            <div className="tooltip" data-direction="bottom">
              <div className="tooltip__initiator">
                <RiErrorWarningLine className="warning" />
              </div>
              <div className="tooltip__item">
                {' '}
                <strong>Equivalente</strong>
                .
              </div>
            </div>

          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            Intel(R) Xeon v4
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            15GB de RAM
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            550GB de ARMAZENAMENTO
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            1GB/s de DOWNLOAD e UPLOAD
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            Ray Tracing (RTX)
          </li>
        </CardPrice>
      </div>

      <div className="columns">
        <CardPrice
          title="SUPER"
          routeToCheckout="/PT/Checkout"
          button="Comprar"
          plan={2}
          price="R$135,05 / Mensal"
        >
          <li className="vantagens">
            <BsCheck className="check checkFirst" />
            <span>RTX 2080 TI</span>

            <div className="tooltip" data-direction="bottom">
              <div className="tooltip__initiator">
                <RiErrorWarningLine className="warning" />
              </div>
              <div className="tooltip__item">
                {' '}
                <strong>Equivalente</strong>
                .
              </div>
            </div>
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            Intel(R) Xeon v4
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            15GB de RAM
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            550GB de ARMAZENAMENTO
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            1GB/s de DOWNLOAD e UPLOAD
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            Ray Tracing (RTX)
          </li>
        </CardPrice>
      </div>
    </section>
  );
}

export default CardPricesBR;
