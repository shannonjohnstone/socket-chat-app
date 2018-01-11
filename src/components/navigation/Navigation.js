import React from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import './navigation.css'

function renderNavItems(configArray) {
  return configArray.map(navItem => (
    <NavLink
      to={navItem.path}
      exact={navItem.exact}
      className="c-nav__item"
      activeClassName="is-active">
        {navItem.text}
      </NavLink>)
  )
}

const Navigation = ({ navigationConfig, navType }) => {
  const navClassNames = classnames(
    'c-nav',
    { 'c-nav-chat': navType === 'chat' }
  )
  return (
    <nav className={navClassNames}>
      {renderNavItems(navigationConfig)}
    </nav>
  )
}

export default Navigation
