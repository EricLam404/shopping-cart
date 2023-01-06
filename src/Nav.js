import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3>Shopping Cart</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to="/shop">
                <   li>Shop</li>
                </Link>
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
