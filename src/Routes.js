import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import DynamicRoute from "./utils/DynamicRoute";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register";
function Routes() {
  return (
  <HashRouter>
      <Switch>
       <DynamicRoute exact path="/" component={Home} authenticated/>
       <DynamicRoute exact path="/login" component={Login} guest/>
       <DynamicRoute exact path="/register" component={Register} guest/>
      </Switch>
  </HashRouter>
  ) 
}

export default Routes;
