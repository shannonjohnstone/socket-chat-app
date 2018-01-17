import React from 'react';
import { shape } from 'prop-types';

const FieldSet = ({ children }) => (
  <fieldset className="l-fieldset">
    {children}
  </fieldset>
);

FieldSet.propTypes = {
  children: shape({}).isRequired
};

export default FieldSet;
