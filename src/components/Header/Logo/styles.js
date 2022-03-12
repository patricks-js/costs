import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    align-items: center;
    gap: .5rem;
  img {
    max-width: 3.75rem;

    width: 100%;
    transition: .2s;
    &:hover {
        transform: translateY(-3px);
    }
    }
  p {
      font:normal bold 2rem var(--font-title) ;
      color: var(--color-light);
      span {
          color: var(--color-alt);
      }
  }
`;
