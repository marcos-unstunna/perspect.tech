import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 62px;
  background: #fff;
  box-shadow: 0 0 14px #3333333d;

  display:flex;
  align-items:center;
  justify-content:center;

  #container-header {
    width: 90%;
    height: 100%;

    display:flex;
    align-items:center;
    justify-content:space-between;

    #menu-desktop {
      height:100%;

      display:flex;
      align-items:center;

      a {
        margin:0 1rem;
        font: 600 1rem 'Product',sans-serif;
        text-decoration:none;
        color: #333;
        position:relative;

        &:hover {
          span {
            width: 50%;
          }
        }

        span {
          width:0;
          height:2px;
          background: #333;

          position:absolute;
          bottom:-3px;

          transition: ease-in-out .3s;

          &:nth-child(1) {
            right:50%;
          }

          &:nth-child(2) {
            left:50%;
          }
        }
      }

      .active {
        span {
          width: 50%;
        }
      }
    }

    .btn {
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

    #btnOpen {
      font-size:2.3rem;
      color: #333;
      cursor:pointer;
      display:none;
    }
  }

  @media (min-width: 300px) {
    #container-header {
      #btnOpen {
        display: block;

        nav {
          .btn {
            button {
              width: 100%;
            }
          }
        }
      }

      #menu-desktop {
        display:none;
      }
    }
  }

  @media (min-width: 992px) {
    height:62px;

    #container-header {
      #btnOpen {
        display: none;

        nav {
          .btn {
            button {
              width: 150px;
            }
          }
        }
      }

      #menu-desktop {
        display:flex;
      }
    }
  }

  @media (min-width: 1140px) {
    height: 62px;
  }
`;

export const ContainerMobile = styled.section`
  display:none;
  width: 0;
  height:100%;
  background: #333;

  position:fixed;
  top:0;
  right:0;
  z-index:3;
  overflow-x: hidden;
  transition: ease-in-out 0.5s;

  #closeBtn {
    cursor:pointer;
  }

  .activeM {
    color:gray;
  }

  header {
    height: 50px;

    display:flex;
    align-items:center;
    justify-content:flex-end;

    svg {
      margin-right: 1rem;
      color: #fff;
      font-size:2rem;
    }
  }

  nav {
    display:flex;
    flex-direction:column;

    a {
      width: 166px;
      margin:.5rem auto;
      color: #fff;
      text-decoration:none;
      font: 600 1.4rem 'Product',sans-serif;
    }

    .btn {
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
  }

  @media (min-width: 300px) {
    display:block;
  }

  @media (min-width: 992px) {
    display:none;
    width:0;
  }
`;
