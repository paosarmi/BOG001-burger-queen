import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WaiterOption from "./component/waiter/Waiter";

export default function App() {
  return;
  <Router>
    <Switch>
      <Route path="/waiter">
        <WaiterOption />
      </Route>
      <Route path="/">
        <Intro />
      </Route>
    </Switch>
  </Router>;
}
