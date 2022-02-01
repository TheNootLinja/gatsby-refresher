import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Footer from '../components/footer/footer'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { homepageImg, contentContainer, pageHeader, pageHeaderSub, blogTitle, blogDate, heroImage, blogSectionHeader, sectionDivider, imageContainer } from './index.module.css';

const IndexPage = ({ data }) => {
  const recentBlogs = data.allMdx.nodes;
  return (
      <div className="index-page">
        <Layout pageTitle="Home Page">
          <div className={imageContainer}>
            <StaticImage
              className={homepageImg}
              alt="Picture of my 2018 Colorado ZR2"
              src="../images/neoncity.jpeg"
              />
            <h1 className={pageHeader}>Coolest Blog on The Internet?</h1>
          <p className={pageHeaderSub}>(Maybe best you've seen today?)</p>
          </div>
          <div className={contentContainer}>
          <h2 className={blogSectionHeader}>Recent Posts</h2>
          <div className={sectionDivider}></div>
          {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
              <h3 className={blogTitle}>{node.frontmatter.title}</h3>
              <p className={blogDate}>Posted: {node.frontmatter.date}</p>
              <GatsbyImage
                className={heroImage}
                image={
                  node.frontmatter.hero_image.childImageSharp.gatsbyImageData
                }
                alt={node.frontmatter.hero_image_alt}
              />
            </Link>
          </article>
        ))}
          </div>
        </Layout>
      </div>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 3 sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          title
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 900, height: 300)
              id
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
