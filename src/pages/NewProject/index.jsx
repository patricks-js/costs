import React from "react";

import { Container } from "./styles";

import { Paragraph } from "../../components/Paragraph";
import { Form } from "../../components/Form";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Title } from "../../components/Title";

export const NewProject = ({url}) => {

  const navigation = useNavigate();

  const createPost = async (project) => {
    // initialize costs and services
    project.cost = 0
    project.services = []

    try {
        const { data } = await axios.post(`${url}projects`, project);
        navigation("/projects", {state: {message: 'Create project successfully!'}});
    } catch(err) {
        console.log(err);
    }
  };

  return (
    <main>
      <Container>
        <Title>Create project</Title>
        <Paragraph>Create your project to after add the services</Paragraph>
        <Form eventForm={createPost} url={url} />
      </Container>
    </main>
  );
};
