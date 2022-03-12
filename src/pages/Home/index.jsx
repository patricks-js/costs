import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import homeLogo from '../../assets/images/savings.svg'
import { Button } from '../../components/Button';
import { Paragraph } from '../../components/Paragraph';


export const Home = () => {

    const navigation = useNavigate()

    const natigateTo = () => {
        navigation('/new-project')
    }

  return (
      <main >
          <Container>
                <h1>Welcome to <span>COS<strong>TS</strong></span></h1>
                <Paragraph>Start managing projects right now</Paragraph>
                <Button event={natigateTo}>Create project</Button>
                <img src={homeLogo} alt="Logo homepage" />
          </Container>
      </main>
  )
}
