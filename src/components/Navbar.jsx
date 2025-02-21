import React from 'react';
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <Link to="/accueil">
            <img src="../../src/assets/img/Logo.png" alt="Logo trouver ton artisan" width="320" height="180" /> </Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/accueil">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/batiment">Batiment</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/Fabrication">Fabrication</NavLink>
                </li>
                <li>
                    <NavLink to="/alimentation">Alimentation</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;