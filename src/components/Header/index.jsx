import React from "react";
import { Logo } from "./Logo";
import { Container, Menu, Navigation } from "./styles";
import { Link } from "react-router-dom";
// import { Burguer } from "./Burguer";

export const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <Navigation>
          {/* <Burguer /> */}
          <Menu>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="enterprise">Enterprise</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </Menu>
        </Navigation>
      </Container>
    </header>
  );
};
