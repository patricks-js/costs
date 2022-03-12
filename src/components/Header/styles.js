import styled from 'styled-components';

export const Container = styled.div`
  height: var(--header-height);
  width: 100%;
  background-color: var(--color-dark);
  display: flex;
  align-items:center;
  justify-content:space-between ;
`;

export const Navigation = styled.nav`

`

export const Menu = styled.ul`
    display: flex;
    gap: 1rem;
    li {
        padding: 5px;
        border-radius: 7px;
        transition:.5s;
        cursor: pointer;
        a {
            color: var(--color-light);
            transition: .3s;
        }
        &:hover {
            background-color: var(--color-light);
            a {
                color: var(--color-dark);
            }
        }
    }
`