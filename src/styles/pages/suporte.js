import styled from 'styled-components';

export const Container = styled.article`
  min-height:100vh;
  height:auto;

  #container-support {
    display:grid;
    grid-template-columns: repeat(2,1fr);
    align-items:center;
    justify-items:center;

    .column {
      &:first-child {
        img {
          width: 600px;
        }
      }

      &:last-child {
        h1 {
          width: 500px;
          font: bold 3rem 'Product',sans-serif;
        }

        p {
          width: 500px;
          font: 300 1rem 'Product',sans-serif;
          color:gray;
        }

        a {
          text-decoration:none;

          button {
            display:block;
            margin: 0 auto;
            width: 150px;
            height: 40px;
            background: #000;
            border:none;
            color: #fff;
            border-radius:4px;
            font-family: 'Product',sans-serif;
            font-weight:600;
            box-shadow: 0 0 14px #3333333d;
            transition: all .3s;
            cursor:pointer;

            &:hover {
              background: #404040;
              box-shadow: 0 0 14px #1c1c1c80;
            }
          }
        }
      }
    }
  }

  @media (min-width: 300px) {
    #container-support {
      min-height: 100vh;
      height:auto;
      grid-template-columns: 1fr;
      padding:.5rem 0;

      .column {
        &:first-child {
          display:flex;
          align-items:center;
          justify-content:center;

          img {
            max-width: 285px;
          }
        }

        &:last-child {
          h1 {
            max-width: 290px;
            font-size:1.5rem;
            text-align:center;
          }

          p {
            max-width: 290px;
            text-align:center;
            margin: .7rem 0;
          }
        }
      }
    }
  }

  @media (min-width: 425px) {
    #container-support {
      .column {
        &:first-child {
          img {
            max-width: 400px;
          }
        }
      }
    }
  }

  @media (min-width: 576px) {
    #container-support {
      .column {
        &:first-child {
          img {
            max-width: 400px;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    #container-support {
      height: 60vh;
      grid-template-columns: repeat(2,1fr);

      .column {
        &:first-child {
          display:flex;
          align-items:center;
          justify-content:center;

          img {
            max-width: 350px;
          }
        }

        &:last-child {
          h1 {
            max-width: 400px;
            font-size:2rem;
            text-align:center;
          }

          p {
            max-width: 400px;
            text-align:center;
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    #container-support {
      height:auto;
      display:grid;
      grid-template-columns: repeat(2,1fr);
      align-items:center;
      justify-items:center;

      .column {
        &:first-child {
          img {
            max-width: 450px;
          }
        }

        &:last-child {
          h1 {
            max-width: 100%;
            margin:0 auto;
            font: bold 3rem 'Product',sans-serif;
          }

          p {
            max-width: 100%;
            margin:0 auto;
            font: 300 1rem 'Product',sans-serif;
            color:gray;
            margin:.5rem 0 .9rem 0;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    #container-support {
      .column {
        &:first-child {
          img {
            max-width: 600px;
          }
        }
      }
    }
  }
`;
