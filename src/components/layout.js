import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css';
import '../styles/global.css';
import Footer from './footer/footer';

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
    <div className="parentContainer">
      <div className={container}>
        <title>{pageTitle}</title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/blog">
                Blog
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default Layout;
