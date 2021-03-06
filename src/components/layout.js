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
  hamburgerContainer,
  menuOpen,
  modalOpen,
  modalClosed
} from './layout.module.css';
import '../styles/global.css';

const Layout = ({ pageTitle, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleNavClick () {
    setIsModalOpen(!isModalOpen);
    document.body.classList.toggle('menu-open');
    window.scrollTo(0,0);
  }

  function handleNavLinkClick () {
    setIsModalOpen(!isModalOpen);
    document.body.classList.toggle('menu-open');
  }

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
        <div className={isModalOpen ? modalOpen : modalClosed}></div>
        <title>{pageTitle}</title>
        <nav className={navBar}>
        <Link to="/">
          <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        </Link>
        <div className={hamburgerContainer} onClick={handleNavClick}>
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
      <CollapsibleNav onLinkClick={handleNavLinkClick} isNavOpen={isModalOpen}/>
      <div className={container}>
        <main>
          <div className={contentContainer}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
