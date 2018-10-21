module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'study project',
    keywords: 'react, css, js, kach, design'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'wj1qg9f38nkx',
        accessToken: '18c88d9b70c61d457efbaaf8690ceca6030e8a2b7fa86c591ba71f52923ce3f5'
      }
    }
  ],
}
