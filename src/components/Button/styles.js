import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 7px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: var(--color-dark);
  font-size: 1.2rem;
  color: var(--color-light);
  transition: .2s;
  /* height: 2.8125rem; */
  &:hover {
    color: var(--color-alt);
  }
`;
