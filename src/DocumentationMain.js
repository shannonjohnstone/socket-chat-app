import React from 'react';
import { string } from 'prop-types';
import { NavLink } from 'react-router-dom';

const DocumentationMain = ({ match }) => <NavLink to={`${match.url}/styleguide`}>Styleguide</NavLink>;

DocumentationMain.propTypes = {
  match: string.isRequired
};

export default DocumentationMain;
