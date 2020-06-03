import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/image2.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "image3.jpg"}) {
    childImageSharp {
      fixed(width:200, grayscale: true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image4.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  example:file(relativePath: {eq: "image4.jpg"}) {
    childImageSharp{
      fluid(maxWidth:100){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const Images = () => {
    const data = useStaticQuery(getImages);
    console.log(data);
    return (
        <section className="images">
            <article className="single-image">
                <h3>Imagen Básica</h3>
                <img src={img} width="100%" alt="Imagen Básica" />
                <h2>Subtítulo</h2>
            </article>
            <article className="single-image">
                <h3>Imagen Fija/desenfocada</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
                <h2>Subtítulo</h2>
            </article>
            <article className="single-image">
                <h3>Imagen Fluida/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
                <div className="small">
                    <Image fluid={data.fluid.childImageSharp.fluid} />
                </div>
                <Image fluid={data.example.childImageSharp.fluid} />
                <h2>Subtítulo</h2>
            </article>
        </section>
    )
}

export default Images
