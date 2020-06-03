const path = require('path')

// creates pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query GetProducts {
            products:allContentfulProduct {
                nodes {
                    slug
                }
            }
        }
    `)

    // console.log('#######')
    // console.log(JSON.stringify(result))
    // console.log('#######')

    result.data.products.nodes.forEach(product => {
        createPage({
            path: `/products/${product.slug}`,
            component: path.resolve('src/templates/product-template.js'),
            context: {
                slug: product.slug
            }
        })
    }

    )
}