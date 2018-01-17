import React from 'react';
import { string } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import LayoutMain from './LayoutMain';
import DocumentationMain from './DocumentationMain';
import Styleguide from './Styleguide';

const Documentation = ({ match }) => (
  <LayoutMain title="Documentation">
    <Switch>
      <Route path="/documentation" exact component={DocumentationMain} />
      <Route path={`${match.path}/styleguide`} component={Styleguide} />
    </Switch>
  </LayoutMain>
);

Documentation.propTypes = {
  match: string.isRequired
};

export default Documentation;
