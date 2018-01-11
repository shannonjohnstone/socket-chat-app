import React from 'react'

const SideMenu = () => {
  const handleOpenClose = () => {
    const sidebar = document.querySelector('.c-sidebar')
    const isOpenBool = sidebar.className.split(' ').includes('is-open')
    if (isOpenBool) sidebar.classList.remove('is-open')
    else sidebar.classList.add('is-open')
  }
  return (
    <aside className="c-sidebar">
      <div className="c-sidebar__icon-items">
        <ul className="list" onClick={handleOpenClose}>
          <li className="list__item">+</li>
          <li className="list__item">+</li>
        </ul>
      </div>
    </aside>
  )
}

export default SideMenu
