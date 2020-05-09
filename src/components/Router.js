import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import MyInfo from "routes/MyPage/MyInfo";
import WriteDocument from "routes/Document/WriteDocument";

import Header from "./Header";
import { IS_LOGGED_IN, ME } from "../SharedQueries";
import client from "../Apollo/Client";
const DefaultRouter = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/docs/write" component={WriteDocument} />
          <Route path="/auth" component={Auth} />
          <Route path="/user/:id" component={MyInfo} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};

export default DefaultRouter;
