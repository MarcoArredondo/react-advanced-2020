import React from "react";
// react router
//Importing the ReactRouter and giving it some alias
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
//This are just components that we'll use as pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  //Normally we wrap whole application inside the Router, in this case we have a separate file
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        {/*Adding URL parameters*/}
        <Route path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
