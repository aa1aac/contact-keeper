import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Router exact path="/" component={Home}></Router>
            <Router exact path="/about" component={About}></Router>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
