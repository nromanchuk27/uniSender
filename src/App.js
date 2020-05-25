import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import List from "./components/List";
import Item from "./components/Item";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={() => <List />} exact path="/" />
        <Route component={() => <Item />} exact path="/:id" />
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
};

export default App;
