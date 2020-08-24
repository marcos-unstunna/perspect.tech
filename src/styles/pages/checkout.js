import styled from 'styled-components';
import bgCheckout from '../../assets/bgCheckout.webp';

export const Container = styled.article `
  background-image: url(${bgCheckout});
  background-size:cover;
  background-position:center center;
  min-height:100vh;
  height: auto;

  display:flex;
  align-items:center;
  justify-content:center;

  &::after {
    content: "";
    position:absolute;
    top:0;
    width: 100%;
    height:100%;
    background: #000;
    opacity:.7;
  }

  section {
    width: 50%;
    min-height: 258px;
    height: auto;
    background: #fff;
    position:absolute;
    z-index:2;
    opacity:.8 !important;
    border-radius:8px;
    padding: 2rem;

    display:flex;
    justify-content:space-around;
    flex-direction:column;

    header {
      display:flex;
      align-items:center;
      flex-grow:1;
      position:relative;

      .returnHome {
        display:flex;
        align-items:center;
        text-decoration:none;

        position:absolute;
        left:0;
        color: #000;
        transition: ease-in-out .3s;

        &:hover {
          color: gray;
        }

        svg {
          margin-right: .3rem;
        }

        span {
          font: 300 1rem 'Product',sans-serif;
        }
      }

      .textHeaderCheckout {
        text-align:center;

        h1 {
          font: bold 2rem 'Product',sans-serif;
        }

        h4 {
          font: 300 1rem 'Product',sans-serif;
        }
      }
    }

    div {
      flex-grow:1;
      text-align:center;

      h1 {
        font: bold 1rem 'Product',sans-serif;
      }


      p {
        font: 300 1rem 'Product',sans-serif;
        margin:1rem 0;
      }

      .container-input {
        display:flex;
        align-items:center;
        justify-content:center;
        margin: 1rem auto 0 auto;

        label {
          font-size:1rem;
          font: 300 .85rem 'Product',sans-serif;
          margin-left:.5rem;
        }
      }

      a {
        button {
          width: 150px;
          height: 40px;
          border-radius:4px;
          color:#fff;
          background: #000;
          border:none;
          cursor:pointer;
          margin-top:2rem;
        }
      }

      .btnDisabled {
        opacity:.8;
        cursor:not-allowed;
      }
  }
`;