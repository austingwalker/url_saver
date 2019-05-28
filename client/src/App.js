import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Nav from "./Components/Nav"
// import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import Url from "./Pages/Url";
import Files from "./Pages/Files";
import ViewFile from "./Pages/ViewFile";


const App = () => (
  <Router>
  <div>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/url" component={Url} />
      <Route exact path="/files" component={Files} />
      <Route exact path="/viewfile/:id" component={ViewFile} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </div>
  </Router>
);

export default App;
