import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Content from "./Pages/Content";
import Files from "./Pages/Files";


const App = () => (
  <Router>
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Content" component={Content} />
      <Route exact path="/files" component={Files} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </div>
  </Router>
);

export default App;
