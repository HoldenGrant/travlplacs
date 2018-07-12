module.exports = {
  siteMetadata: {
    title: 'Holden Grant',
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
