import styled from 'styled-components';

export const Container = styled.article `
  min-height:100vh;
  height:auto;
`;

export const PlanosContainer = styled.article `
  padding: 2rem;

  #container-prices {
    width: 100%;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
    margin: 1rem 0;
  }

  @media (min-width: 300px) {
    padding:1rem;

    #container-prices {
      grid-template-columns: 1fr;
      row-gap:1rem;
    }
  }

  @media (min-width: 576px) {
    padding:1rem;

    #container-prices {
      grid-template-columns: repeat(2,1fr);
      row-gap:1rem;
    }
  }

  @media (min-width: 768px) {
    padding:1rem;

    #container-prices {
      grid-template-columns: repeat(2,1fr);
      row-gap:0;
    }
  }

  @media (min-width: 1200px) {
    padding: 2rem;
  }

`;