import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/products.module.css';

const products = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h2>página de productos</h2>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, reiciendis id! Sequi sed velit illum. Tempore officiis expedita impedit suscipit?</p>
            </div>

        </Layout>
    );
}

export default products;
