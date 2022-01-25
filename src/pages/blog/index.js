import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import './index.module.css';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/blog/${node.slug}`}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
              <GatsbyImage
                className="hero-image"
                image={
                  node.frontmatter.hero_image.childImageSharp.gatsbyImageData
                }
                alt={node.frontmatter.hero_image_alt}
              />
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default BlogPage;
