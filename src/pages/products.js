import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

import styles from "../styles/products.module.css"

// import { Link } from "gatsby"

const ComponentName = ({ data }) => {

    const { allContentfulProduct: { nodes: products } } = data

    return (
        <Layout>
            <section className={styles.page}>
                {products.map(product => {
                    return (
                        <article key={product.id}>
                            <Image fluid={product.image.fluid} alt={product.title} />
                            <h3>{product.title} <span>${product.price}</span></h3>
                            <Link to={`/products/${product.slug}`}>Más detalles...</Link>
                        </article>
                    )
                })
                }
            </section>
        </Layout>

    )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        slug
      }
    }
  }
`

export default ComponentName



// Esto es lo primero que se crea durante el tutorial para esta página
// import React from 'react';
// import Layout from '../components/Layout';
// import styles from '../styles/products.module.css';

// const products = () => {
//     return (
//         <Layout>
//             <div className={styles.page}>
//                 <h2>página de productos</h2>
//                 <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, reiciendis id! Sequi sed velit illum. Tempore officiis expedita impedit suscipit?</p>
//             </div>

//         </Layout>
//     );
// }

// export default products;
