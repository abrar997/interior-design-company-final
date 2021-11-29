import React from "react";
import { Route, Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
// comp
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Work from "./Component/Work/Work";
import Contact from './Component/Contact/Contact'
const App = () => {
  return (
    <Router>
      {" "}
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Work" component={Work} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
