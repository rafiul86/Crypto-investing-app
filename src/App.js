import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Home from "./components/home/Home";
import Incubator from "./components/incubator/Incubator";
import Learn from "./components/learn/Learn";
import FundStartUp from "./components/shared/fundStartUp/FundStartUp";
import Welcome from "./components/learn/welcome/Welcome";
import Progress from "./components/learn/progress/Progress";
import Tutorial from "./components/learn/tutorial/Tutorial";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/incubator">
            <Incubator />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/fundStartUp">
            <FundStartUp />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/progress">
            <Progress />
          </Route>
          <Route path="/tutorial">
            <Tutorial />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
