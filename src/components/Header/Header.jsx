import React from 'react';
//css
import './Header.css'
//img
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-item'>
                <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;