import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import { aboutContainer, aboutPageImg, imageContainer, pageHeader } from './about.module.css';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className={imageContainer}>
      <StaticImage
        className={aboutPageImg}
        alt="Bridge over water lit up with neon lighting"
        src="../../images/aboutpg.jpg"
      />
      <h1 className={pageHeader}>About the Blog</h1>
      </div>
      <div className={aboutContainer}>
        {/* Need photo for top of this page */}
        <p className="about-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet posuere elit, 
        sit amet mollis turpis varius a. Ut at ante quis tellus egestas feugiat id at tortor. 
        Proin vitae efficitur odio, eu facilisis sem. Fusce eu maximus purus. Maecenas vulputate 
        venenatis fermentum. Praesent massa nisl, rutrum id sapien eget, semper porttitor turpis. 
        Duis ultricies mauris a purus viverra sagittis. Donec semper in nunc sed euismod. Donec 
        rhoncus lobortis ex non dignissim. Nullam pharetra turpis eros, lacinia volutpat ex semper 
        quis. Mauris in lorem vitae urna accumsan semper. Pellentesque tincidunt ultrices risus quis 
        pulvinar. Nunc luctus egestas felis non consequat. Donec sed lobortis felis. Donec purus enim, 
        gravida non vestibulum id, hendrerit eu dui.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
