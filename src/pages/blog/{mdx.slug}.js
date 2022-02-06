import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import './indivBlog.css'
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);
  return <Layout pageTitle={data.mdx.frontmatter.title}>
    <GatsbyImage className='indiv-hero-img' image={heroImage} alt={data.mdx.frontmatter.hero_image_alt}/>
    <div className="blog-text-content">
    <h1 className="blog-title">
      {data.mdx.frontmatter.title}
    </h1>
    <p className="blog-date">Posted: {data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  </Layout>;
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 900)
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
