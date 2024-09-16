import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>E-commerce App</h1>
            <div className="cart">
                <span>cart (0)</span>
            </div>
        </header>
    )
};

export default Header;