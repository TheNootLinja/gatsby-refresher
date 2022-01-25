import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        I'm baby letterpress umami asymmetrical, occupy lomo gochujang flannel
        ugh swag semiotics 3 wolf moon. Shabby chic aesthetic iceland pork belly
        enamel pin skateboard truffaut hella banh mi. Tumeric tofu drinking
        vinegar, air plant plaid meh literally gochujang woke pop-up gastropub
        vape gluten-free thundercats adaptogen. Wayfarers cronut master cleanse,
        actually organic stumptown tumeric snackwave blue bottle kickstarter
        shaman mixtape marfa blog single-origin coffee.
      </p>
      <StaticImage
        className="zr2-img"
        alt="Picture of my 2018 Colorado ZR2"
        src="../images/coloradozr2.png"
      />
    </Layout>
  );
};

export default IndexPage;
