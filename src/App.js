import React from "react";
import "./custom.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavigationBar />
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
          <Footer />
          <section className="filler"></section>
        </div>
      </Router>
    </div>
  );
}

export default App;
