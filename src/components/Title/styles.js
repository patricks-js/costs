import styled from "styled-components";

export const TitleStyle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-family: var(--font-title);
  font-size: ${(props) => (props.h4 ? "1.3rem" : "2.3rem")};
`;
