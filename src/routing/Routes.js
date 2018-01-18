import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import JoinContainer from '../pages/Join/JoinContainer';
import Home from '../Home';
import Chat from '../pages/Chat/ChatContainer';
import Documentation from '../Documentation';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={JoinContainer} />
      <Route path="/home" exact component={Home} />
      <Route path="/chat" component={Chat} />
      <Route path="/documentation" component={Documentation} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
