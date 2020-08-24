import styled from 'styled-components';

export const Container = styled.article `
  height:100vh;
  background: #0414a7;
  color: #e0e2f4;

  h1 { 
    font: normal 2.75rem/1.05em 'VT323', monospace; 
  }

  h2 { 
    font: normal 2.25rem/1.25em 'VT323', monospace; 
  }

  h3 {
    font: lighter 1.5rem/1.25em 'VT323', monospace; 
  }

  h4 {
    font: lighter 1.125rem/1.2222222em 'VT323', monospace; 
  }

  p { 
    font: normal 1.5rem 'VT323', monospace; 
    margin-left:1rem;
  }


  .container {
    width: 90%;
    margin: auto;
    max-width: 660px;
  }

  .bsod {
    padding-top: 10%;
    
    .neg {
      text-align: center;
      color: #0414a7;
      
      .bg {
        background: #aaaaaa;
        padding: 0 15px 2px 13px;
      }
    }

    .title { 
      margin-bottom: 50px; 
    }

    .nav {
      margin-top: 35px;
      text-align: center;
      
      .link {
        text-decoration: none;
        padding: 0 9px 2px 8px;
        font: normal 1.25rem 'VT323', monospace; 
        color: #e0e2f4;
        transition: all .3s;
        border-radius:4px;
        
        &:hover,
        &:focus {
          background: #aaaaaa;
          color: #0414a7;
        }
      }
    }
  }

  @media (min-width: 300px) {
    display:flex;
    align-items:center;
  }

  @media (min-width: 992px) {
    display:block;
  }
`;