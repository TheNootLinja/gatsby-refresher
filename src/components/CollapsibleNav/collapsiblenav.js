import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import { collapsibleNavContainer, collapsibleNav, collapsibleNavOpen, navItemList, navItem, navLink, navOpen, closed } from './collapsiblenav.module.css';

const CollapsibleNav = ({ isNavOpen, onLinkClick }) => {

  // function handleNavLinkClick () {
  //   document.body.classList.toggle('menu-open');
  // }

  return (
    <div className={isNavOpen ? collapsibleNavOpen : collapsibleNav}>
      <ul className={navItemList}>
        <li className={navItem}>
        <Link onClick={onLinkClick} className={navLink} to="/">Home</Link>
        </li>
        <li className={navItem}>
        <Link onClick={onLinkClick} className={navLink} to="/blog">Blog</Link>
        </li>
        <li className={navItem}>
        <Link onClick={onLinkClick} className={navLink} to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
};

export default CollapsibleNav;
