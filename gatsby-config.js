module.exports = {
  siteMetadata: {
    title: 'Travel Places',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      }
    },
    'gatsby-transformer-remark'
  ],
},
{
  pathPrefix: "/travlplacs"
}
