import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./History";

import { ROUTE_PATHS } from "../utils/PathNames";
import Home from "../containers/Home";
import Plotter from "../containers/Plotter";

const Routes = (
  <Router history={history}>
    <Switch>
      <Route component={Home} path={ROUTE_PATHS.home}  />
      <Route component={Plotter} path={ROUTE_PATHS.plotter} exact />
      <Redirect from="*" to="/home" />
    </Switch>
  </Router>
);

export default Routes;
