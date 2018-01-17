import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Chat from '../Chat';
import Documentation from '../Documentation';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
      <Route path="/documentation" component={Documentation} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
