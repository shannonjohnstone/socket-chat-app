import React from 'react'
import { boolean, string } from 'prop-types'
import classnames from 'classnames'
import Navigation from '../navigation/Navigation'
import { navigationConfig } from '../navigation/navigation.config'

const Header = ({ size, position, title, container, navType }) => {
  console.log(container, 'container');
  const headerClassNames = classnames(
    'l-main-header',
    { 'l-main-header--small': size === 'small' },
    { 'l-main-header--fixed': position === 'fixed' }
  )
  const containerClass = classnames(
    { 'l-container': container !== false },
  )
  return (
    <header className={headerClassNames}>
      <div className={containerClass}>
        {title && <h1 className="l-h1-reveresed">{title}</h1>}
        <Navigation navigationConfig={navigationConfig} navType={navType} />
      </div>
    </header>
  )
}

// Header.defaultProps = {
//   title: 'Welcome'
// }

Header.propTypes = {
  title: string,
  container: boolean
}

export default Header
