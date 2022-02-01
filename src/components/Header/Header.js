import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/home">Home P</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;