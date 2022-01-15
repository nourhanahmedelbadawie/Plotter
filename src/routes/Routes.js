import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import history from "./History";
import { ROUTE_PATHS } from "../utils/PathNames";
import Show from "../containers/Home";
import Plotter from "../containers/Plotter";

const Routes = (
  <Router history={history}>
    <Switch>
      <Route component={Show} path={ROUTE_PATHS.show} exact />
      <Route component={Plotter} path={ROUTE_PATHS.plotter} />
      <Redirect from="/*" to="/show" />
    </Switch>
  </Router>
);

export default Routes;
