import React from 'react';

// Styles
import { Link } from 'react-router-dom';
import { Container } from './styles';

function CardPrice({
  title,
  price,
  plan,
  children,
  routeToCheckout,
  button,
}) {
  function GetPlans(idPlan) {
    switch (idPlan) {
      case 1:
        localStorage.setItem('plano', 'semanal');
        break;

      case 2:
        localStorage.setItem('plano', 'mensal');
        break;

      default:
        localStorage.setItem('plano', 'semanal');
        break;
    }
  }

  return (
    <Container className="price">
      <li className="header">{ title }</li>
      <li className="grey">
        { price }
      </li>

      { children }

      <li className="grey">
        <Link to={routeToCheckout}>
          <button type="button" onClick={() => GetPlans(plan)}>{button}</button>
        </Link>
      </li>
    </Container>
  );
}

export default CardPrice;
