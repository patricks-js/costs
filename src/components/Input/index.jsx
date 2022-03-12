import React from "react";

import { Container } from "./styles";

export const Input = ({
  identify,
  type,
  text,
  placeholder,
  event,
  selection,
  value,
  categories,
}) => {
  return (
    <Container>
      <label htmlFor={identify}>{text}:</label>
      {!selection ? (
        <input
          type={type}
          id={identify}
          name={identify}
          placeholder={placeholder}
          value={value}
          onChange={event}
        />
      ) : (
        <select
          name={identify}
          id={identify}
          onChange={event}
          value={value | ""}
        >
          <option>
            Select one option
          </option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      )}
    </Container>
  );
};
