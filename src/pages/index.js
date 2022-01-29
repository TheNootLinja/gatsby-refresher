import * as React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer/footer'
import { StaticImage } from 'gatsby-plugin-image';
import { homepageImg, contentContainer } from './index.module.css';

const IndexPage = () => {
  return (
      <div className="index-page">
        <Layout pageTitle="Home Page">
          <StaticImage
            className={homepageImg}
            alt="Picture of my 2018 Colorado ZR2"
            src="../images/neoncity.jpeg"
            />
          <div className={contentContainer}>
            <p>
                Welcome to the coolest blog on the internet (or at least a Pretty Cool one!).
            </p>
          </div>
        </Layout>
      </div>
  );
};

export default IndexPage;
