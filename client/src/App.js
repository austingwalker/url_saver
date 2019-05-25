import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import Nav from "./Components/Nav"
import Home from "./Pages/Home";
import Content from "./Components/Content";
import Landing from "./Components/Landing";
import Url from "./Components/Url";
import Files from "./Pages/Files";
import ViewFile from "./Pages/ViewFile";


const App = () => (
  <Router>
  <div>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Landing" component={Landing} />
      <Route exact path="/Content" component={Content} />
      <Route exact path="/Url" component={Url} />
      <Route exact path="/files" component={Files} />
      <Route exact path="/ViewFile/:id" component={ViewFile} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </div>
  </Router>
);

export default App;
