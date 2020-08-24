import styled from 'styled-components';

export const Container = styled.article`
  .visibleIcon {
    opacity:1;
  }

  .hiddenIcon {
    opacity:0;
  }

  .accordion-item {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 9999px;
  }

  .accordion-item.collapsed {
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }

  .accordion-title {
    font-weight: 600;
    cursor: pointer;
    color: #000;
    border-bottom: 1px solid #8080802e;
    padding: 1.5em 0;

    h4 {
      font: 600 1rem 'Product',sans-serif;
      width: 80%;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    position:relative;

    svg {
      position:absolute;
      right:0;
      transition: ease-in-out .2s;

      &:first-child {
        font-size:1.2rem;
      }
    }
  }

  .accordion-content {
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    border-bottom: 1px solid #8080802e;

    p {
      font: 300 1rem 'Product',sans-serif;
      color:gray;
    }
  }
`;
