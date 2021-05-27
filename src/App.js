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
import Main from "./components/main/Main";
import StartupDetails from "./components/incubator/startupDetails/StartupDetails";
import Upcoming from "./components/home/header/upcoming/Upcoming";
import ProgressAnalysis from "./components/learn/progress/ProgressAnalysis";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/incubator/:id">
            <Incubator />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/fundStartUp">
            <FundStartUp />
          </Route>
          <Route path="/welcome/:id">
            <Welcome />
          </Route>
          <Route path="/progress/:id">
            <Progress />
          </Route>
          <Route path="/tutorial">
            <Tutorial />
          </Route>
          <Route path="/featured">
            <Upcoming />
          </Route>
          <Route path="/progressAnalysis/:id">
            <ProgressAnalysis />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
