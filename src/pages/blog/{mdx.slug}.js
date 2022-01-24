import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
  return <Layout pageTitle={data.mdx.frontmatter.title}>
    <p>Posted: {data.mdx.frontmatter.date}</p>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </Layout>;
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      body
    }
  }
`;

export default BlogPost;
