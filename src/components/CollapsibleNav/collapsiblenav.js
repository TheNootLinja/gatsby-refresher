import React from 'react';
import { Link } from 'gatsby';

import { collapsibleNav, navItemList, navItem, navLink } from './collapsiblenav.module.css';

const CollapsibleNav = () => {
  return (
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
  )
};

export default CollapsibleNav;
