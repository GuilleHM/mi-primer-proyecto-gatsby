// import React from "react"

// export default function Home() {
//   return <div>Hello world!</div>
// }
// Este era el código que venía con la plantilla; lo cambio por una función de flecha anónima

import React from 'react';
import Layout from '../components/Layout';
import { ExampleButton } from '../components/button';

export default () => (
    <Layout>
        <h1>Hola Guille!</h1>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, reiciendis id! Sequi sed velit illum. Tempore officiis expedita impedit suscipit?</p>
        <div>
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noreferrer">Ir a la página oficial de Gatsby</a>
        </div>
        <h2>Todos los días amanece</h2>
        <ExampleButton>Hola Porra</ExampleButton>
    </Layout>
)


