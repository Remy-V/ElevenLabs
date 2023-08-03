import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router,
    Routes, Route, Link } from "react-router-dom";

import CreateAstronaut from "./Components/CreateAstronaut.component";
import EditAstronaut from "./Components/EditAstronaut.component";
import AstronautList from "./Components/AstronautList.component";

import Homepage from "./Components/Homepage.component";



const App = () => {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} 
                  className="nav-link">
                  Eleven Labs
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-astronaut"}  
                    className="nav-link" >
                    Add an Astronaut
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/astronaut-list"} 
                    className="nav-link" >
                    Book
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" 
                    element={<Homepage />} />


                  <Route path="/create-astronaut" 
                    element={<CreateAstronaut />} />


                  <Route path="/edit-astronaut/:id" 
                    element={<EditAstronaut />} />

                    
                  <Route path="/astronaut-list" 
                    element={<AstronautList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;
