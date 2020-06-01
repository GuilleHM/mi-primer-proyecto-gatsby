import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import styles from '../styles/blog.module.css';

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>Esta es la página "blog"</h1>
                <Link to="/">Volver a la página de inicio</Link>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, reiciendis id! Sequi sed velit illum. Tempore officiis expedita impedit suscipit?</p>
            </div>
        </Layout>
    );
}

export default blog;
