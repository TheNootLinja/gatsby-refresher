import React from 'react';
import Layout from '../../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="about-container">
        {/* Need photo for top of this page */}
        <p className="about-content">
        My name is Bianca, and I run A Pretty Cool Blog! I live in Chicago and love everything there is about the night 
        life in such a big city. On my blog I write about everything from night photography tips to some lesser known 
        spots in the city I love (only some, you've gotta put in some work exploring like I did!). My hope is that from
        reading my blogs, you will get the same itch to explore that drove me to moving here. I want you to think of
        exploring the city you live in just as you would a forest, a mountain, or even a new park. Nature isn't the only
        place is the world with beautiful views.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
