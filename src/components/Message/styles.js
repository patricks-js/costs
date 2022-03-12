import styled from "styled-components";

export const Container = styled.div`
  width: 18.75rem;
  padding: 1rem;
  border: 1px solid;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2rem;
  border-radius: 5px;
  color: ${(props) => (props.success ? "#155724" : "#721c24")};
  background-color: ${(props) => (props.success ? "#D4EDDA" : "#f8d7da")};
  border-color: ${(props) => (props.success ? "#c3e6cb" : "#f5c6cb")};
  position: absolute;
  right: 200px;
`;
