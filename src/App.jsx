import { Fragment } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import AppRoutes from "./Routes/router";
import GlobalStyle from "./styles/global";
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
