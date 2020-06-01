// import React from "react"

// export default function Home() {
//   return <div>Hello world!</div>
// }
// Este era el código que venía con la plantilla; lo cambio por una función de flecha anónima

import React from 'react';
import Layout from '../components/Layout';

export default () => (
    <Layout>
        <h1>Hola Guille!</h1>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, reiciendis id! Sequi sed velit illum. Tempore officiis expedita impedit suscipit?</p>
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">Ir a la página oficial de Gatsby</a>
    </Layout>
)


