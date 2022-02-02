import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import CollapsibleNav from './CollapsibleNav/collapsiblenav';

import {
  parentContainer,
  container,
  heading,
  navLinks,
  navLinkItem,
  selectedNavLinkItem,
  navLinkText,
  siteTitle,
  contentContainer,
  navBar,
  navDivider,
  hamburgerContainer
} from './layout.module.css';
import '../styles/global.css';

const Layout = ({ pageTitle, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={parentContainer}>
        <title>{pageTitle}</title>
        <nav className={navBar}>
        <Link to="/">
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        </Link>
        <div className={hamburgerContainer} onClick={() => setIsModalOpen(!isModalOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
          <ul className={navLinks}>
            <li className={pageTitle === 'Home Page' ? selectedNavLinkItem : navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <div className={navDivider}></div>
            </li>
            <li className={pageTitle === 'My Blog Posts' ? selectedNavLinkItem : navLinkItem}>
              <Link className={navLinkText} to="/blog">
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <div className={navDivider}></div>
            </li>
            <li className={pageTitle === 'About Me' ? selectedNavLinkItem : navLinkItem}>
              <Link className={navLinkText} to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        {isModalOpen ? <CollapsibleNav></CollapsibleNav> : ''}
      <div className={container}>
        <main>
          {/* <h1 className={heading}>{pageTitle}</h1> */}
          <div className={contentContainer}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
