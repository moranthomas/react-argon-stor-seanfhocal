import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Home from "components/main/Home.js";
import Landing from "components/main/Landing.js";
import Author from "views/Author.js";
import Reviews from "views/Reviews.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/"     exact render={props => <Landing {...props} />} />
      <Route path="/home" exact render={props => <Landing {...props} />} />
      <Route path="/author" exact render={props => <Author {...props} />} />
      <Route path="/reviews" exact render={props => <Reviews {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
