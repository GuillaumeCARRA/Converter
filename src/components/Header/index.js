import React from 'react';
import './header.css'; 

function Header({basicAmount}) {
    
    return (
        <header className="header">
            <h1 className="converter__title">Converter</h1>
            <h2 className="converter__amount">{`${basicAmount} euro`}</h2>
        </header>
    )
}

export default Header;
