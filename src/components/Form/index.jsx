import React, { useState, useEffect } from "react";
import axios from "axios";

import { Input } from "../Input";
import { Button } from "../Button";

import { Container } from "./styles";

export const Form = ({ eventForm, projectData, url }) => {
  const [categories, setCategories] = useState([]);

  const [project, setProject] = useState(projectData || {});

  useEffect(async () => {
    const { data } = await axios.get(`${url}categories`);
    setCategories(data);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    eventForm(project);
  };

  const hundleChange = (e) =>
    setProject({ ...project, [e.target.name]: e.target.value });

  const hundleSelect = (e) =>
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });

  return (
    <Container onSubmit={submit}>
      <Input
        text="Project name"
        identify="projectName"
        placeholder="Enter the project name "
        type="text"
        event={hundleChange}
        value={project.name}
      />
      <Input
        text="Project budget"
        identify="projectBudget"
        placeholder="Enter the project budget"
        type="number"
        event={hundleChange}
        value={project.budget}
      />
      <Input
        text="Select category"
        identify="projectName"
        selection
        categories={categories}
        event={hundleSelect}
        value={project.category ? project.category.id : ''}
      />
      <Button>Create project</Button>
      <span></span>
    </Container>
  );
};
