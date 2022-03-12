import React from "react";

import { ButtonStyled } from "./styles";

export const Button = ({event, children}) => <ButtonStyled onClick={event}>{children}</ButtonStyled>;
