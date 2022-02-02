import React from 'react';
import { Link } from 'gatsby';

import { collapsibleNavContainer, collapsibleNav, navItemList, navItem, navLink } from './collapsiblenav.module.css';

const CollapsibleNav = () => {
  return (
  <div className={collapsibleNavContainer}>
    <div className={collapsibleNav}>
      <ul className={navItemList}>
        <li className={navItem}>
        <Link className={navLink} to="/">Home</Link>
        </li>
        <li className={navItem}>
        <Link className={navLink} to="/blog">Blog</Link>
        </li>
        <li className={navItem}>
        <Link className={navLink} to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
  )
};

export default CollapsibleNav;
