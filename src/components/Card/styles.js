import styled from "styled-components";

export const Container = styled.div`
  padding: 0.7rem;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  width: 100%;
  max-width: 16.875rem;
  height: 11.875rem;
  margin: 0.7%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    background-color: var(--color-dark);
    color: var(--color-light);
    border-radius: 5px;
    padding: 0.4rem;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
      color: var(--color-dark);
      border: 1px solid var(--color-placeholder);
    }
  }
`;

const hundleTypeCategory = color => {
    switch (color) {
        case 'Infra':
            return '#00798C';
        case 'Web Development':
            return '#C20114';
        case 'Design':
            return '#682D63';
        case 'Kaisen':
            return '#58BC82';
        default:
            return '#999'
    }
}

export const BallCategory = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${ ({color}) => hundleTypeCategory(color)};
`;
