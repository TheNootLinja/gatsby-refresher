module.exports = {
  siteMetadata: {
    title: `A Pretty Cool Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Commissioner', 'Fraunces', 'Permanent Marker'],
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Permanent Marker`,
    //         variants: [`400`],
    //       },
    //       {
    //         family: `Fraunces`,
    //         variants: [`400`],
    //       },
    //       {
    //         family: 'Commissioner',
    //         variants: [`400`],
    //       },
    //     ],
    //   },
    // }
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Permanent Marker`,
          `Fraunces`,
          `Commissioner`,
        ],
        display: 'swap'
      }
    }
  ],
};
