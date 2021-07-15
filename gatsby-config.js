/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: "@johndoe",
    person: { name: "john", age: 32 },
    simpleData: ['item1', 'item2'],
    complexData: [
      { name: "John", age: 32 },
      { name: "Susan", age: 21 },
    ]
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          // Add any options here
      },
    },
  ],
}
 