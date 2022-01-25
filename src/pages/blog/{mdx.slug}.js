import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import './indivBlog.css'
import Layout from '../../components/layout';

const BlogPost = ({ data }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image);
  return <Layout pageTitle={data.mdx.frontmatter.title}>
    <p>Posted: {data.mdx.frontmatter.date}</p>
    <GatsbyImage className='indiv-hero-img' image={heroImage} alt={data.mdx.frontmatter.hero_image_alt}/>
    <p>
      Photo Credit: {" "}
      <a href={data.mdx.frontmatter.hero_image_credit_link}>{data.mdx.frontmatter.hero_image_credit_text}</a>
    </p>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
