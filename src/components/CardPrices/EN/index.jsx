import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { RiErrorWarningLine } from 'react-icons/ri';
import CardPrice from '../../CardPrice';

function CardPricesEN() {
  return (
    <section id="container-prices">
      <div className="columns">
        <CardPrice
          title="BOOSTER"
          routeToCheckout="/EN/Checkout"
          button="Buy"
          plan={1}
          price="US$ 35.05 / Weekly"
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
                <strong>Equivalent</strong>
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
            550GB STORAGE
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            1GB/s from DOWNLOAD and UPLOAD
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
          routeToCheckout="/EN/Checkout"
          button="Buy"
          plan={2}
          price="US$ 135.05 / Monthly"
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
                <strong>Equivalent</strong>
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
            550GB STORAGE
          </li>

          <li className="vantagens">
            <BsCheck className="check" />
            1GB/s from DOWNLOAD and UPLOAD
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

export default CardPricesEN;
