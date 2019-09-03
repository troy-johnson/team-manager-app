import React from 'react';
import { useRoutes } from 'hookrouter';
import { Dashboard, User, NotFound } from './pages';
import './App.css';

const routes = {
  '/': () => <Dashboard />,
  '/user/:id': ({ id }) => <User id={id} />
};

const App = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFound />;
};

export default App;
