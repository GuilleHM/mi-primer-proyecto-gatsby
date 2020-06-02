import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
query primeraConsulta {
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
    }`;

const Header = () => {

    const { site: { info: { title, person: { name } } } } = useStaticQuery(getData);

    return (
        <div>
            {/* <h2>{data.site.siteMetadata.person.name}</h2> */}
            <h2>Título: {title}</h2>
            <h2>Nombre: {name}</h2>
        </div>
    );
}

export default Header;
