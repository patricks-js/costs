import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { Button } from "../../components/Button";
import { Message } from "../../components/Message";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";

import { Container, AboveAll, FlexLayout } from "./styles";

export const Projects = ({ url }) => {
  // Location
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  // Loading
  const [removeLoading, setRemoveLoading] = useState(false);

  // Projects
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const { data } = await axios.get(`${url}projects`);
      setProjects(data);
      setRemoveLoading(true);
    }, 1000);
  }, []);

  // hudleRemoveProject and Message

  const [projectMessage, setProjectMessage] = useState('')

  const removeProject = async id => {
    try {
      const response = await axios.delete(`${url}projects/${id}`);
      setProjects(projects.filter((project) => project.id !== id));
      setProjectMessage('Removed project successfully')
    } catch (error) {
      console.log(error);
    }
  };

  // Navigate
  const navigate = useNavigate();

  const toCreateProject = () => {
    navigate("/new-project");
  };

  return (
    <main>
      <Container>
        <AboveAll>
          <Title>My projects</Title>
          <Button event={toCreateProject}>Create new project</Button>
          {message && <Message success message={message} />}
          {projectMessage && <Message success message={projectMessage} />}
        </AboveAll>
        <FlexLayout>
          {projects.length > 0 &&
            projects.map((project) => (
              <Card
                name={project.projectName}
                key={project.id}
                id={project.id}
                budget={project.projectBudget}
                category={project.category}
                handleRemove={removeProject}
              />
            ))}

          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados</p>
          )}
        </FlexLayout>
      </Container>
    </main>
  );
};
