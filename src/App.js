import React from "react";
import "./custom.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Gallery from "./Components/Gallery";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="light" expand="md" fixed="bottom" collapseOnSelect>
            <Navbar.Brand href="#home">Orange Cafe</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="about">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="menu">
                  <Nav.Link>Menu</Nav.Link>
                </LinkContainer>
                <LinkContainer to="gallery">
                  <Nav.Link>Gallery</Nav.Link>
                </LinkContainer>
                <LinkContainer to="contact">
                  <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/menu" component={Menu} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer/>
          <section className="filler"></section>
        </div>
      </Router>
    </div>
  );
}

export default App;
