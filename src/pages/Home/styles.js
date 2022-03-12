import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display:flex ;
    flex-direction: column;
    align-items: center;
    justify-content:center ;
    gap: var(--gap);
    h1 {
        font: normal 700 2.5rem var(--font-title);
        span {
            background-color: var(--color-dark);
            color: var(--color-light);
            padding: 0 5px ;
            border-radius: 10px;
            strong {
                color: var(--color-alt)
            }
        }
    }
    img {
        max-width: 350px;
    }
`;
