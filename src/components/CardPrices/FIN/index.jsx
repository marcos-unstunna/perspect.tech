import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import CardPrice from '../../CardPrice';

function CardPricesFIN() {
  return (
    <section id="container-prices">
      <div className="columns">
        <CardPrice
          title="BOOSTER"
          routeToCheckout="/FIN/Tarkista"
          button="Ostaa"
          price="€ 20,99 / Viikoittain"
          plan={1}
        >
          <li className="vantagens">
            <BsCheck className="check checkFirst" />
            <span>RTX 2080 TI</span>

            <div className="tooltip" data-direction="bottom">
              <div className="tooltip__initiator">
                <RiErrorWarningLine className="warning" />
              </div>
              <div className="tooltip__item">
                <strong>Vastaava</strong>
                .
              </div>
            </div>

          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            15GB RAM
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            Intel(R) Xeon v4
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            550GB Varastosta
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            1GB/s DOWNLOAD ja UPLOAD
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
          routeToCheckout="/FIN/Tarkista"
          button="Ostaa"
          price="€ 5,45 / Kuukausittain"
          plan={2}
        >
          <li className="vantagens">
            <BsCheck className="check checkFirst" />
            <span>RTX2080</span>

            <div className="tooltip" data-direction="bottom">
              <div className="tooltip__initiator">
                <RiErrorWarningLine className="warning" />
              </div>
              <div className="tooltip__item">
                <strong>Vastaava</strong>
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
            15GB RAM
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            550GB Varastosta
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            1GB/s DOWNLOAD ja UPLOAD
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

export default CardPricesFIN;
