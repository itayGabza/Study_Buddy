// src/app.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import {  Profile, ExternalApi } from "./views";
import HomePage from './components/HomePage';
import ContentCard from './views/ContentCard'

import ProtectedRoute from "./auth/protected-route";

import "./app.css";
import SignUp from "./components/SignUp";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
    <Route path="/test" exact component={ContentCard} />
    <NavBar />

    <div id="app" class="container-fluid" >
      <div >
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignUp} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
      <Footer />
    </div>
    </div>

  );
};

export default App;