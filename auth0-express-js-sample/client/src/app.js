// src/app.js

import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import {  Profile, ExternalApi } from "./views";
import HashLinkPage from './components/HashLinkPage';
import ContentCard from './views/ContentCard'

import ProtectedRoute from "./auth/protected-route";

import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
    <Route path="/test" exact component={ContentCard} />
    <div id="app" class="container-fluid" >
      <NavBar />
      <div >
        <Switch>
          <Route path="/" exact component={HashLinkPage} />
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