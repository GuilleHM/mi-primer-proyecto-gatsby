/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Mi primer proyectin con Gatsby",
    description: "bla bla bla",
    author: "Guillermo el Mejor",
    data: ['item1', 'item2'],
    person: { name: "Pepe", age: 40 }
  },
  plugins: [`gatsby-plugin-styled-components`],
}
