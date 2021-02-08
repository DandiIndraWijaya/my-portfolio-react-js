import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./views/Profile/Profile";
import Welcome from "./views/Welcome/Welcome";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;
