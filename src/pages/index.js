import * as React from 'react';
import Layout from '../components/layout';
import Footer from '../components/footer/footer'
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
      <div className="index-page">
        <Layout pageTitle="Home Page">
          <p>
            I'm baby letterpress umami asymmetrical, occupy lomo gochujang flannel
            ugh swag semiotics 3 wolf moon. Shabby chic aesthetic iceland pork belly
            enamel marfa blog single-origin coffee.
          </p>
          <StaticImage
            className="homepage-img"
            alt="Picture of my 2018 Colorado ZR2"
            src="../images/neoncity.jpeg"
          />
        </Layout>
      </div>
  );
};

export default IndexPage;
