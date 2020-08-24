import styled from 'styled-components';

export const Container = styled.ul`
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius:4px;
  box-shadow: 0 0 10px 0 #33333345;


  &:hover {
    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
  }

  .header {
    background-color: #111;
    color: white;
    font-size: 25px;
    font-family: 'Product',sans-serif;
    border-radius:4px 4px 0 0;
  }

  li {
    border-bottom: 1px solid #eee;
    padding: 20px;
    text-align: center;
    font-family: 'Product',sans-serif;
  }

  .vantagens {
    display:flex;
    align-items:center;
    justify-content:center;

    &:hover {
      background-color: #dcdcdc;
    }

    span {
      margin: 0 .5rem;
    }

    svg {
      margin-right: .5rem;
    }

    .warning {
      color:orange;
      cursor:pointer;
      margin-right:0;
      margin-top:.3rem;
    }

    .checkFirst {
      margin-right:0;
    }

    .check {
      color: #000;
    }

    .close {
      color: red;
    }

    .tooltip {
      position: relative;

      &__item {
        position: absolute;
        min-width: 100px;
        padding: 20px;
        visibility: hidden;
        opacity: 0;
        background: white;
        transition: all .250s cubic-bezier(0, 0, 0.2, 1);
        color: #484848;
        border: 1px solid #cecece;
        border-radius: 3px;
        font-weight: 500;
        box-shadow: 0 0 14px #3333333d;
        z-index: 4;
        &:after {
          content: "";
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          border-style: solid;
        }
      }

      &__initiator {
        cursor: pointer;
        z-index: 5;
      }

      &[data-direction="left"] {

        .tooltip__initiator:hover ~ .tooltip__item {
          transform: translate3d(0, -50%, 0);
          visibility: visible;
          opacity: 1;
        }

        .tooltip__item {
          top: 50%;
          right: calc(100% + 1em);
          transform: translate3d(15px, -50%, 0);

          &:after {
            top: 50%;
            right: -0.5em;
            transform: translate3d(0, -50%, 0);
            border-width: 0.5em 0 0.5em 0.5em;
            border-color: transparent transparent transparent white;
            -webkit-filter: drop-shadow(1px 2px 1px #bcbcbc);
            filter: drop-shadow(1px 2px 1px #bcbcbc);
          }
        }
      }

      &[data-direction="bottom"] {

        .tooltip__initiator:hover ~ .tooltip__item {
          transform: translate3d(-50%, 0, 0);
          visibility: visible;
          opacity: 1;
        }

        .tooltip__item {
          top: calc(100% + 1em);
          left: 50%;
          transform: translate3d(-50%, -15px, 0);

          &:after {
            top: -0.5em;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
            border-width: 0 0.5em 0.5em 0.5em;
            border-color: transparent transparent white transparent;
            -webkit-filter: drop-shadow(1px 2px 1px #bcbcbc);
            filter: drop-shadow(1px -1px 1px #bcbcbc);
          }
        }
      }
    }
  }

  .grey {
    background-color: #eee;
    font-size: 20px;
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

      &:hover {
        background: #404040;
        box-shadow: 0 0 14px #1c1c1c80;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .columns {
      width: 100%;
    }
  }
`;
