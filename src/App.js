import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Stories from "./components/Stories";

const App = () => {
  return (
    <Container fluid>
      <NavBar />
      <Stories />
    </Container>
  );
};

export default App;
