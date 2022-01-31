import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
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
  switchStyle,
  sliderStyle
} from './layout.module.css';
import '../styles/global.css';

const Layout = ({ pageTitle, children }) => {
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
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav className={navBar}>
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
