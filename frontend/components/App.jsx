import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBarContainer';

const App = () => (
  <div>
    <NavBar />
    {/* <Switch>
      <Redirect to="/"  />
    </Switch> */}
  </div>
);

export default App; 