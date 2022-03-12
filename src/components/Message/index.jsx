import React, { useState, useEffect } from "react";

import { Container } from "./styles";

export const Message = ({ message, success }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return <>{visible && <Container success={success} >{message}</Container>}</>;
};
