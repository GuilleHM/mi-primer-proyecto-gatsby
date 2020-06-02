import React from 'react';
import Header from '../examples/Header';
import HeaderOldStatic from '../examples/HeaderOldStatic';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';


const examples = ({ data }) => {

    const { site: { info: { author } } } = data;

    return (
        <Layout>
            <p>hola desde la página de ejemplos</p>
            <Header />
            <HeaderOldStatic />
            <h5>Autor: {author}</h5>
        </Layout>

    );
}

export const data = graphql`
query myPageQuery {
  site {
    info:siteMetadata {
      author
      data
      description
      person {
        name
        age
      }
      title
    }
  }
}
`

export default examples;
