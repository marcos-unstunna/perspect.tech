import styled from 'styled-components';

export const Container = styled.section`
  min-height: 85vh;
  height:auto;
  margin:3rem auto;

  display:flex;
  justify-content:center;
  flex-direction:column;

  h1 {
    text-align:center;
    font: 700 2.5rem 'Product',sans-serif;
    margin-bottom:1rem;
    text-transform:uppercase;
  }

  p {
    font: 300 1rem 'Product',sans-serif;
    color:gray;
  }

  @media (min-width: 300px) {
    padding: 1rem;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Infos = styled.section`
  display:grid;
  grid-template-columns: repeat(2,1fr);
  margin-top:1rem;

  .column {
    text-align:center;
  }

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    row-gap:1rem;
  }

  @media (min-width: 576px) {
    grid-template-columns: repeat(2,1fr);
    row-gap:0;
  }
`;
