import React from 'react';
import Layout from '../../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="about-container">
        {/* Need photo for top of this page */}
        <p className="about-content">
          Pretty Cool Blog focuses on nightlife in the city ranging from cool
          neon photography to the best hidden gems to eat at. Whether you are
          looking to get ideas for activities in the city at night or just want
          to live through us, we think we can help!
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
