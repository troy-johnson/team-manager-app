import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Dashboard, User, NotFound } from "./pages";
import { Loading, PrivateRoute, Navbar } from "./components";
import "./App.css";
import "semantic-ui-css/semantic.css";
import { useAuth0 } from "./utils/auth0";
import history from "./utils/history";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router className="app" history={history}>
      <Navbar />
      <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/user/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
