import React from 'react'
import { Link } from 'react-router-dom'

const DocumentationMain = ({ match }) => {
  console.log(match, 'match');
  return (
    <Link to={`${match.url}/styleguide`}>Styleguide</Link>
  )
}

export default DocumentationMain;
