import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WaiterOption from "./component/waiter/Waiter";
import Intro from "./component/intro/Intro";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/chef">
          <WaiterOption />
        </Route>
        <Route path="/waiter" component={WaiterOption} />
        <Route path="/" exact>
          <Intro />
        </Route>
        <Route>
          <div>Has perdido tu hamburguesa.</div>
        </Route>
      </Switch>
    </Router>
  );
}
