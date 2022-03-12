import styled from "styled-components";

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  label {
    font-size: 1.1rem;
  }
  input, select{
    width: 80%;
    border: none;
    background-color: white;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 5px;
    font-size: 1rem;
    color: var(--color-text);
  }
  /* select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(../../assets/images/caret-down-solid.svg) no-repeat center right ;
    border: 1px solid #333; 
    padding-right: 20px;
    font-size: 15px;
  } */

`;
