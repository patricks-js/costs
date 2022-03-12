import React from 'react';

import { Container } from './styles';
import logo from '../../../assets/images/logo.png'

export const Logo = () => {
  return (
      <Container>
          <img src={logo} alt="Logo do site" />
          <p>COS<span>TS</span></p>
      </Container>
  )
}
