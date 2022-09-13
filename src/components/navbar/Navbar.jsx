import React from "react";
import logo from '../../images/airbnb-logo.png'
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Logo" className="nav--logo" />
        </nav>
    )
}