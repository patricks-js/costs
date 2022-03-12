import { Container, BallCategory } from "./styles";

import { FaPencilRuler, FaTrash } from "react-icons/fa";
import { Title } from "../Title";
import { Button } from "../Button";

export const Card = ({ id, name, budget, category, handleRemove }) => {

    const remove = e => {
        e.preventDefault()
        handleRemove(id)
    }

  return (
    <Container>
      <Title h4>{name}</Title>
      <p>
        Orçamento: <strong>R${budget}</strong>
      </p>
      <p>
        <BallCategory color={category.name}></BallCategory>
        <strong> {category.name}</strong>
      </p>
      <div>
        <Button>
          <FaPencilRuler /> Editar
        </Button>
        <Button event={remove}>
          <FaTrash /> Remover
        </Button>
      </div>
    </Container>
  );
};
