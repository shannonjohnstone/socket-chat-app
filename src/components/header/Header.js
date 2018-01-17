import React from 'react';
import { bool, string } from 'prop-types';
import classnames from 'classnames';
import Navigation from '../navigation/Navigation';
import { navigationConfig } from '../navigation/navigation.config';

const Header = ({ size, position, title, container, navType }) => {
  const headerClassNames = classnames(
    'l-main-header',
    { 'l-main-header--small': size === 'small' },
    { 'l-main-header--fixed': position === 'fixed' }
  );
  const containerClass = classnames({ 'l-container': container !== false });
  return (
    <header className={headerClassNames}>
      <div className={containerClass}>
        {title && <h1 className="l-h1-reveresed">{title}</h1>}
        <Navigation navigationConfig={navigationConfig} navType={navType} />
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: null
};

Header.propTypes = {
  size: string.isRequired,
  position: string.isRequired,
  title: string,
  container: bool.isRequired,
  navType: string.isRequired
};

export default Header;
