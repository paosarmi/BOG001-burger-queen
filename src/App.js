import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WaiterOption from "./component/waiter/Waiter";
import ChefOption from "./component/chef/Chef";
import Intro from "./component/intro/Intro";
import NotFound from "./component/notFound/NotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/chef" component={ChefOption} />
        <Route path="/waiter" component={WaiterOption} />
        <Route path="/" exact component={Intro} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
