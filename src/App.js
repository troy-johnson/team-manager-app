import React from 'react';
// import { useRoutes } from 'hookrouter';
import { Router, Route, Switch } from 'react-router-dom';
import { Dashboard, User, NotFound } from './pages';
import { Loading, PrivateRoute } from './components';
import './App.css';
import { useAuth0 } from './auth0';
import history from './utils/history';

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <PrivateRoute path="/user" component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
