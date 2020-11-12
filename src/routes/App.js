import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

// Components
import Layout from "../components/Layout/Layout";

// Pages
import Login from "../pages/Login";
import Home from "../pages/Home";
import Comments from "../pages/Comments";
import UserEdit from "../pages/UserEdit";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Login} />
        <Layout>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path="/posts/:id" component={Comments} />
          <Route exact path="/profile" component={UserEdit} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
