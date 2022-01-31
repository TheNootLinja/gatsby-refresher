import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import { blogDate, blogTitle, heroImage } from './index.module.css';

const BlogPage = ({ data }) => {
  return (
    <div className="blog-page">
      <Layout pageTitle="My Blog Posts">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={`/blog/${node.slug}`}>
              <h2 className={blogTitle}>{node.frontmatter.title}</h2>
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
      </Layout>
    </div>
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
