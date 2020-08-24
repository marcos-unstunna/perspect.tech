import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 300px) {
    #container-terms {
      padding:2rem 0;
      max-width: 290px;
      margin: 0 auto;

      h1 {
        font: bold 2.5rem 'Product',sans-serif;
        text-align:center;
        margin-bottom: .5rem;
      }

      h3 {
        font: 400 2rem 'Product',sans-serif;
        text-align:center;
      }

      p {
        font-family: 'Product',sans-serif;
        color:gray;
        text-align:justify;
      }
    }
  }

  @media (min-width: 576px) {
    #container-terms {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    #container-terms {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    #container-terms {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    #container-terms {
      max-width: 1140px;
    }
  }
`;
