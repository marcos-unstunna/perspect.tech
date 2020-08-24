import styled from 'styled-components';

export const Container = styled.footer`
  height: 29vh;
  background: #fff;
  box-shadow: 0 0 14px #3333333d;

  #container-footer {
    max-width: 1140px;
    height:100%;
    margin:0 auto;

    display:grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: 23.3vh;

    .column {
      padding: 1rem 0;
      margin:0 auto;

      &:nth-child(1) {
        display:flex;
        flex-direction:column;
        position:relative;
        margin-top:1rem;
        padding:0;
        z-index:3;
        nav.language-selector {
          position: relative;
          width: 100%;
          cursor:pointer;
          outline:0;
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            a {
              text-decoration:none;
              color: #333;
              li {
                height: 40px;
                padding: 0 15px;
                position: relative;
                z-index: 9999;
                display:flex;
                align-items:center;
                justify-content:space-between;
                font: 600 1rem 'Product',sans-serif;
              }
            }
            ul {
              color: #9fabb3;
              box-sizing: border-box;
              background-color: #000;
              position: absolute;
              width: 100%;
              bottom: 0;
              height: 0;
              overflow: hidden;
              transition: height 0.2s;
              border-radius:4px;
              a {
                color: #9fabb3;
                text-decoration:none;
                li {
                  &:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: white;
                    transition: background-color 0.4s, color 0.4s;
                  }
                }
              }
            }
          }
          &:hover {
            ul {
              a {
                color:#fff;
              }
              ul {
                height: 160px;
              }
            }
          }
        }
        img {
          width: 18px;
        }

        #social-network {
          width: 250px;
          margin:1rem auto;

          display:flex;
          justify-content:space-between;

          a {
            background: #000;
            padding:.7rem;
            border-radius:4px;

            display:flex;
            align-items:center;
            justify-content:center;

            transition: ease-in-out .3s;

            &:hover {
              box-shadow: 0 0 14px #333;

              &:nth-child(1) {
                background: #00ACEE;
              }

              &:nth-child(2) {
                background: #C4302B;
              }

              &:nth-child(3) {
                background: #7289DA;
              }

              &:nth-child(4) {
                background: #DD2A7B;
              }
            }
          }
        }

        svg {
          color: #fff;
          font-size: 1.3rem;
        }
      }

      &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        width: 170px;

        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        flex-direction:column;

        h3 {
          font-size:1.5rem;
          margin-bottom:.3rem;
          color: #000;
          font-family: 'Product',sans-serif;
        }

        img {
          margin-bottom: 1rem;
        }

        a {
          text-decoration:none;
          font: 300 1rem 'Product',sans-serif;
          margin:.3rem 0;
          color:gray;
          transition: all .3s;

          &:hover {
            color: #000;
          }
        }
      }
    }
  }

  section {
    height: 9vh;
    background: #fff;
    position:relative;

    display:flex;
    align-items:center;
    justify-content:center;

    font: 600 1rem 'Product',sans-serif;
    color:#000;

    hr {
      position:absolute;
      top:0;
      width: 70%;
      border-color: #80808014;
    }
  }

  @media (min-width: 300px) {
    min-height:29vh;
    height:auto;

    #container-footer {
      grid-template-columns: 1fr;

      .column {
        &:nth-child(1) {
          .language-selector {
            span {
              pointer-events: none;
            }
          }
        }

        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          width: 250px;
        }
      }
    }

    section {
      height:13vh;
      text-align:center;
    }
  }

  @media (min-width: 768px) {
    #container-footer {
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media (min-width: 1200px) {
    #container-footer {
      grid-template-columns: repeat(4,25%);

      .column {
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
          width: 170px;
        }
      }
    }

    section {
      height:9vh;
    }
  }
`;
