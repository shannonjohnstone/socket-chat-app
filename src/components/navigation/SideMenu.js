import React from 'react';
import { Button } from '../../components';

const SideMenu = () => {
  const handleOpenClose = () => {
    const sidebar = document.querySelector('.c-sidebar');
    const isOpenBool = sidebar.className.split(' ').includes('is-open');
    if (isOpenBool) sidebar.classList.remove('is-open');
    else sidebar.classList.add('is-open');
  };

  return (
    <aside className="c-sidebar">
      <div className="c-sidebar__icon-items">
        <Button onClick={handleOpenClose} className="btn">+</Button>
      </div>
    </aside>
  );
};

export default SideMenu;
