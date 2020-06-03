import React from "react";
import { graphql, Link } from "gatsby";
import Layout from '../components/Layout';
import Image from "gatsby-image"

const ComponentName = ({ data: { product: { title, price, image: { fixed }, info: { info } } } }) => {
    return (
        <Layout>
            <div style={{ textAlign: "center" }}>
                <Link to="/products/" >Regresar a la página de productos</Link>
                <h1>{title}</h1>
            </div>
            <section className="single-product">
                <article>
                    <Image fixed={fixed} alt={title} />
                </article>
                <article>
                    <h1>{title}</h1>
                    <h3>${price}</h3>
                    <p>{info}</p>
                    <button>Añadir al carrito</button>
                </article>
            </section>
        </Layout>
    )

}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed (width:300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`;

export default ComponentName;

// Parte de la práctica del tutorial
// import React from 'react';

// const productTemplate = (props) => {
//     return (
//         <div>
//             <h1>Hola desde la plantilla de producto</h1>
//         </div>
//     );
// }

// export default productTemplate;
