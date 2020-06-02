import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/blog/">Blog</Link></li>
                <li><Link to="/products/">Productos</Link></li>
                <li><Link to="/examples/">Ejemplos</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
