import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LayoutMain from './LayoutMain'
import DocumentationMain from './DocumentationMain'
import Styleguide from './Styleguide'

const Documentation = ({ match }) => {
  const styleguideUrl = `${match.url}/styleguide`
  console.log(styleguideUrl, 'styleguideUrl');
  return (
    <LayoutMain title="Documentation">
      <Switch>
        <Route path="/documentation" exact component={DocumentationMain} />
        <Route path={`${match.path}/styleguide`} component={Styleguide} />
      </Switch>
    </LayoutMain>
  )
}

export default Documentation;
