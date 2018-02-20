import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="isActive" exact>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="isActive">Portfolio</NavLink> 
        <NavLink to="/contact" activeClassName="isActive">Contact</NavLink>
    </header>
);

export default Header;