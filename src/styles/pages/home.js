import styled from 'styled-components';

export const Container = styled.article `
  min-height:100vh;
  height:auto;
  margin:0 auto;
  overflow:hidden;

  hr {
    width: 75%;
    border-color: #8080801c;
    margin:0 auto;
  }

  .hidden {
    opacity:0;
  }

  .visible {
    opacity:1;
  }
`;

export const Banner = styled.section `
  min-height: 90vh;
  height:auto;
  padding: 0 3rem 0 3rem;
  overflow:hidden;

  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction:column;

  #esq {
    width: 100%;
    text-align:center;

    h1 {
      font: bold 2.6rem 'Product',sans-serif;
      text-transform: uppercase;
      width: 100%;
      color: #000;
      line-height:1;
    }

    h3 {
      font: 300 1.2rem 'Product',sans-serif;
      color: gray;
      width: 100%;
      margin: .7rem 0 1rem 0;
      line-height:1;
    }

    a {
      button {
        width: 150px;
        height: 40px;
        background: #000;
        border:none;
        border-radius:4px;
        color: #fff;
        font: bold 0.8rem 'Product',sans-serif;
        box-shadow: 0 0 14px #3333333d;
        transition: all .3s;
        cursor:pointer;
        text-transform:uppercase;

        &:hover {
          background: #404040;
          box-shadow: 0 0 14px #1c1c1c80;
        }
      }
    }
  }

  #dir {
    width: 100%;
  }

  @media (min-width: 300px) {
    max-width: 300px;
    padding: 2rem;
    margin:0 auto;

    #esq {
      h1 {
        font-size: 2.2rem;
      }

      h3 {
        line-height: 1.2;
      }

      a {
        button {
          width: 100%;
        }
      }
    }

    #dir {
      display:none;
    }
  }

  @media (min-width: 425px) {
    max-width: 300px;
    padding: 0;
    margin:0 auto;

    #esq {
      h1 {
        font-size: 2.2rem;
      }

      h3 {
        line-height: 1.2;
        text-align:justify;
      }

      a {
        button {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 576px) {
    max-width: 400px;

    #esq {
      h1 {
        font-size:2.5rem;
      }
    }

    #dir {
      display:flex;
      justify-content:center;
    }
  }

  @media (min-width: 768px) {
    max-width: 720px;
    justify-content:center;
    padding:2rem 0;

    #esq {
      width: 720px;

      h3 {
        text-align:center;
        font-size:1.1rem;
      }

      a {
        button {
          width: 150px;
        }
      }
    }

    #dir {
      img {
        margin-top:1rem;
      }
    }
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
    padding: 2rem 0;
    justify-content:space-evenly;

    #esq {
      width: 100%;

      h1 {
        font-size:2.4rem;
      }

      h3 {
        font-size:1.2rem;
      }
    }
  }
`;

export const Games = styled.section `
  max-width: 1140px;
  margin: 0 auto;
  min-height: 100vh;
  height: auto;
  padding: 2rem 0;
  overflow:hidden;

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  header {
    text-align:center;
    margin-bottom:1rem;

    h1 {
      font: bold 2rem 'Product',sans-serif;
      text-transform: uppercase;
      line-height:.8;
    }

    h3 {
      font: 300 1.2rem 'Product',sans-serif;
      color: gray;
      width: 90%;
      margin: .7rem auto 1rem auto;
    }
  }

  #container-images {
    width: 100%;
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 2rem;
    margin: 2rem 0;

    img {
      width: 100%;
      box-shadow: 0 0 14px #3333333d;
      border-radius:4px;
      transition: all .3s;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 14px #333;
      }
    }
  }

  h3 {
    font: 300 1.2rem 'Product',sans-serif;
    color: gray;
    width: 100%;
    margin: .7rem auto 1rem auto;
    text-align:center;
  }

  @media (min-width: 300px) {
    max-width: 300px;
    padding: 2rem;

    header {
      h1 {
        font-size: 2.4rem;
        line-height:1;
        text-align:center;
      }

      h3 {
        line-height: 1.3;
        text-align:center;
        margin: .7rem 0 1rem 0;
        width: 100%;
      }
    }

    #container-images {
      width: 100%;
      display:grid;
      grid-template-columns: 1fr;

      img {
        width: 80%;
        box-shadow: 0 0 14px #3333333d;
        border-radius:4px;
        transition: all .3s;
      }
    }
  }

  @media (min-width: 425px) {
    padding:2rem 0;

    header {
      h1 {
        font-size: 2.4rem;
        line-height:1;
        text-align:center;
      }

      h3 {
        line-height: 1.3;
        text-align:justify;
        margin: .7rem 0 1rem 0;
        width: 100%;
      }
    }

    #container-images {
      display:grid;
      grid-template-columns: 1fr;

      img {
        box-shadow: 0 0 14px #3333333d;
        border-radius:4px;
        transition: all .3s;
      }
    }
  }

  @media (min-width: 576px) {
    max-width: 400px;
    padding: 2rem;

    header {
      h1 {
        font-size:2.5rem;
      }
    }

    #container-images {
      grid-template-columns:repeat(2,1fr);
      column-gap:1rem;

      img {
        width: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 720px;

    header {
      h3 {
        font-size:1.1rem;
        width:90%;
        margin:.7rem auto;
        text-align: center;
      }
    }

    #container-images {
      grid-template-columns: repeat(3,1fr);
      column-gap: 1.3rem;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1140px;

    header {
      width: 90%;
    }

    #container-images {
      grid-template-columns: repeat(5,1fr);
    }
  }
`;

export const Planos = styled.section `
  max-width: 1140px;
  margin: 0 auto;
  min-height: 100vh;
  height: auto;
  padding: 2rem 0;
  overflow:hidden;

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  header {
    text-align:center;

    h1 {
      font: bold 2.5rem 'Product',sans-serif;
    }
  }

  #container-prices {
    width: 100%;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
    margin: 1rem 0;
  }

  @media (min-width: 300px) {
    #container-prices {
      grid-template-columns: 1fr;
      row-gap: 1rem;
      width: 90%;
    }
  }

  @media (min-width: 768px) {
    #container-prices {
      grid-template-columns: repeat(2,1fr);
      row-gap:0;
      width: 95%;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1140px;

    #container-prices {
      width: 100%;

      .price {
        &:hover {
          box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
        }
      }
    }
  }
`;

export const Plataform = styled.section `
  max-width: 1140px;
  margin: 0 auto;
  height: auto;
  padding: 2rem 0;
  overflow:hidden;

  display:grid;
  grid-template-columns: 50% 50%;
  align-items:center;
  justify-items:center;

  #esq {
    display:flex;
    align-items:center;
    justify-content:center;

    img {
      width: 80%;
      margin:0 auto;
    }
  }

  #dir {
    width: 100%;

    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;

    h1 {
      font: bold 2.5rem 'Product',sans-serif;
      text-transform:uppercase;
    }

    p {
      font: 300 1.2rem 'Product',sans-serif;
      color: gray;
      width: 100%;
      margin: .7rem 0 1rem 0;
    }
  }

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    padding:2rem;
    text-align:center;

    #dir {
      p {
        text-align:justify;
      }
    }

    #esq {
      display:none;
    }
  }

  @media (min-width: 425px) {
    #dir {
      h1 {
        text-align:center;
      }
    }
  }

  @media (min-width: 576px) {
    #dir {
      align-items:center;

      h1 {
        font-size:2.3rem;
      }

      p {
        text-align:center;
        max-width: 560px;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-rows:auto;

    #esq {
      display:flex;
      padding-bottom:1rem;
    }

    #dir {
      align-items:center;

      p {
        text-align:center;
      }
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: 50% 50%;

    #dir {
      align-items:center;

      h1 {
        text-align:center;
        font-size:2.4rem;
      }

      p {
        text-align:center;
      }
    }

    #esq {
      padding-bottom:0;
    }
  }
`;

export const Plataform2 = styled.section `
  max-width: 1140px;
  margin: 0 auto;
  height: auto;
  padding: 2rem 0;
  overflow:hidden;

  display:grid;
  grid-template-columns: 40% 60%;
  align-items:center;
  justify-items:center;

  #esq {
    width: 100%;

    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;

    h1 {
      font: bold 2.4rem 'Product',sans-serif;
      text-transform:uppercase;
    }

    p {
      font: 300 1.2rem 'Product',sans-serif;
      color: gray;
      width: 100%;
      margin: .7rem 0 1rem 0;
    }
  }

  #dir {
    display:flex;
    align-items:center;
    justify-content:center;

    img {
      max-width: 500px;
      margin:0 auto;
    }
  }

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    padding:2rem;

    #esq {
      p {
        text-align:justify;
      }
    }

    #dir {
      display:none;
    }
  }

  @media (min-width: 425px) {
    #esq {
      align-items:center;

      h1 {
        text-align:center;
        font-size:2.5rem;
      }

      p {
        text-align:center;
      }
    }
  }

  @media (min-width: 576px) {
    #esq {
      p {
        max-width: 560px;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-rows:auto;

    #dir {
      display:flex;
    }

    #esq {
      align-items:center;

      p {
        text-align:center;
      }
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: 50% 50%;

    #esq {
      align-items:flex-start;

      h1 {
        text-align:left;
        font-size:2.4rem;
      }

      p {
        text-align:left;
      }
    }
  }
`;

export const FAQ = styled.section `
  padding:2rem 0;
  overflow:hidden;

  header {
    text-align:center;
    margin-bottom:1rem;

    h1 {
      font: 700 2rem 'Product',sans-serif;
    }
  }

  @media (min-width: 300px) {
    margin:0 auto;
    min-height:80vh;
    height:auto;
    padding:2rem .5rem;

    display:flex;
    justify-content:center;
    flex-direction:column;
  }

  @media (min-width: 320px) {
    padding: 2rem;
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
    margin:0 auto;
    min-height:80vh;
    height:auto;
  }
`;

export const Test = styled.section `
  max-width: 1140px;
  margin: 0 auto;
  min-height: 30vh;
  height: auto;
  padding: 2rem 0;
  overflow:hidden;

  display:flex;
  align-items:center;

  #text {
    h1 {
      font: bold 2.4rem 'Product',sans-serif;
      text-transform:uppercase;
    }

    h3 {
      font: 300 1.3rem 'Product',sans-serif;
      color: gray;
    }
  }

  a {
    button {
      width: 150px;
      height: 40px;
      background: #000;
      border:none;
      border-radius:4px;
      color: #fff;
      font: 600 0.8rem 'Product',sans-serif;
      box-shadow: 0 0 14px #3333333d;
      transition: all .3s;
      cursor:pointer;
      text-transform:uppercase;

      &:hover {
        background: #404040;
        box-shadow: 0 0 14px #1c1c1c80;
      }
    }
  }

  @media (min-width: 300px) {
    flex-direction:column;
    padding: 2rem;
    text-align:center;

    #text {
      width: 100%;

      h1 {
        font-size:2.2rem;
      }

      h3 {
        text-align:justify;
      }
    }

    a {
      button {
        margin-top: 1rem;
        width: 236px;
      }
    }
  }



  @media (min-width: 576px) {
    flex-direction:column;
    padding: 2rem;
    text-align:center;

    #text {
      width: 100%;

      h1 {
        font-size:2.2rem;
      }

      h3 {
        text-align:center;
      }
    }
  }

  @media (min-width: 768px) {
    #text {
      h3 {
        text-align:center;
      }
    }
  }
`;
