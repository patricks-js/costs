import { Routes as Routing, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewProject } from "../pages/NewProject";
import { Contact } from "../pages/Contact";
import { Enterprise } from "../pages/Enterprise";
import { Projects } from "../pages/Projects";

const AppRoutes = () => {

  const url = "http://localhost:5001/";

  return (
    <Routing>
      <Route path="/" element={<Home />} />
      <Route path="/new-project" element={<NewProject url={url} />}  />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects url={url} />} />
      <Route path="/enterprise" element={<Enterprise />} />
    </Routing>
  );
};

export default AppRoutes;
