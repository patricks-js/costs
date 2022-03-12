import styled from "styled-components";

export const Container = styled.div`
  height: var(--header-height);
  width: 100%;
  background-color: var(--color-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    gap: 1rem;
    li {
      a {
        color: var(--color-light);
        font-size: 1.4rem;
        transition: .2s;
        display: inline-block;
        &:hover {
            transform: translateY(-3px);
        }
      }
    }
  }
  p, blockquote {
    color: var(--color-light);
    font-weight: medium;
    margin-top: .5rem;
    span {
        color: var(--color-alt);
    }
  }
  blockquote {
      display: flex;
      align-items: center;
      gap:.3rem ;
      path {
        color: #FE4A49;
      }
  }
`;
